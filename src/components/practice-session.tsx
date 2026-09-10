import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { FingerGuide } from "@/components/finger-guide";
import { ResultsView } from "@/components/results-view";
import { TypingPane } from "@/components/typing-pane";
import { Button } from "@/components/ui/button";
import { VirtualKeyboard } from "@/components/virtual-keyboard";
import { cn } from "@/lib/cn";
import { fingerForChar } from "@/lib/keyboard";
import {
  CUSTOM_TEXT_KEY,
  buildLessonText,
  getLesson,
  nextLessonId,
  type Lesson,
} from "@/lib/lessons";
import { EMPTY_STATE, loadState, recordResult, setMute as persistMute } from "@/lib/persist";
import { playCorrect, playDone, playError } from "@/lib/sound";
import {
  createSession,
  expectedChar,
  formatDuration,
  liveStats,
  tick,
  typeBackspace,
  typeChar,
  type Mode,
  type Session,
} from "@/lib/typing";

type Props = {
  lessonId: string;
};

function readCustom(): string {
  if (typeof window === "undefined") return "";
  return window.sessionStorage.getItem(CUSTOM_TEXT_KEY) ?? "";
}

function makeSession(lesson: Lesson, mode: Mode): Session | null {
  const text = buildLessonText(lesson, lesson.id === "custom" ? readCustom() : undefined);
  if (!text) return null;
  return createSession(text, mode, lesson.durationMs ?? null);
}

export function PracticeSession({ lessonId }: Props) {
  const lesson = getLesson(lessonId);
  const [store, setStore] = useState(EMPTY_STATE);
  const [mode, setMode] = useState<Mode>(lesson?.mode ?? "tutor");
  const [session, setSession] = useState<Session | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [focused, setFocused] = useState(true);
  const [flash, setFlash] = useState(0);
  const [seed, setSeed] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const composing = useRef(false);
  const skipInput = useRef(false);
  const recorded = useRef(false);

  useEffect(() => {
    setStore(loadState());
  }, []);

  const restart = useCallback(() => {
    if (!lesson) return;
    recorded.current = false;
    setMode(lesson.mode);
    setSession(makeSession(lesson, lesson.mode));
    setFocused(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }, [lesson]);

  useEffect(() => {
    restart();
  }, [restart, seed, lessonId]);

  useEffect(() => {
    if (!session || session.finished || session.startedAt === null) return;
    const id = window.setInterval(() => {
      const t = Date.now();
      setNow(t);
      setSession((prev) => (prev ? tick(prev, t) : prev));
    }, 100);
    return () => window.clearInterval(id);
  }, [session?.startedAt, session?.finished, session?.durationMs]);

  useEffect(() => {
    if (!session?.finished || recorded.current || !lesson) return;
    recorded.current = true;
    const stats = liveStats(session, Date.now());
    setStore(recordResult(lesson.id, stats.wpm, stats.accuracy));
    playDone(store.mute);
  }, [session, lesson, store.mute]);

  const applyChar = useCallback(
    (char: string) => {
      setSession((prev) => {
        if (!prev) return prev;
        const next = typeChar(prev, char, Date.now());
        if (next.errors > prev.errors && next.caret === prev.caret) {
          playError(store.mute);
          setFlash((n) => n + 1);
        } else if (next.caret > prev.caret && next.marks[prev.caret] === "correct") {
          playCorrect(store.mute);
        } else if (next.errors > prev.errors) {
          playError(store.mute);
        }
        return next;
      });
    },
    [store.mute],
  );

  const applyBackspace = useCallback(() => {
    setSession((prev) => (prev ? typeBackspace(prev) : prev));
  }, []);

  const handleKeyEvent = useCallback(
    (event: KeyboardEvent | React.KeyboardEvent) => {
      if (!session || session.finished) return false;
      const native = "nativeEvent" in event ? event.nativeEvent : event;
      if (native.isComposing || event.key === "Process") return false;
      if (event.ctrlKey || event.metaKey || event.altKey) return false;
      if (event.key === "Tab") {
        event.preventDefault();
        return true;
      }
      if (event.key === "Backspace") {
        event.preventDefault();
        applyBackspace();
        return true;
      }
      if (event.key.length === 1) {
        event.preventDefault();
        applyChar(event.key);
        return true;
      }
      return false;
    },
    [applyBackspace, applyChar, session],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target === inputRef.current) return;
      if (target) {
        const tag = target.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
      }
      handleKeyEvent(event);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleKeyEvent]);

  const stats = useMemo(() => (session ? liveStats(session, now) : null), [session, now]);
  const target = session ? expectedChar(session) : null;
  const finger = target ? fingerForChar(target) : null;

  if (!lesson) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <h1 className="font-display text-2xl font-semibold">Không tìm thấy bài</h1>
        <Button className="mt-6" asChild>
          <Link to="/">Về trang chủ</Link>
        </Button>
      </div>
    );
  }

  if (lesson.id === "custom" && !session) {
    return (
      <div className="mx-auto max-w-lg py-16 text-center">
        <h1 className="font-display text-2xl font-semibold">Chưa có văn bản</h1>
        <p className="mt-2 text-muted">Dán một đoạn chữ ở trang chủ rồi bắt đầu.</p>
        <Button className="mt-6" asChild>
          <Link to="/">Soạn văn bản</Link>
        </Button>
      </div>
    );
  }

  if (session?.finished && stats) {
    return (
      <ResultsView
        title={lesson.title}
        stats={stats}
        best={store.bestByLesson[lesson.id]}
        nextId={nextLessonId(lesson.id)}
        onRetry={() => setSeed((n) => n + 1)}
      />
    );
  }

  if (!session || !stats) {
    return <p className="py-16 text-center text-muted">Đang mở bài…</p>;
  }

  const progress =
    session.durationMs && stats.remainingMs !== null
      ? 1 - stats.remainingMs / session.durationMs
      : session.target.length === 0
        ? 0
        : session.caret / session.target.length;

  return (
    <div className="flex flex-col gap-3">
      <header className="flex flex-wrap items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/" aria-label="Về trang chủ">
            <ArrowLeft className="size-5" />
          </Link>
        </Button>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wide text-primary">{lesson.group}</p>
          <h1 className="truncate font-display text-xl font-semibold text-ink">{lesson.title}</h1>
        </div>
        <div className="flex items-center gap-2 font-mono text-sm font-semibold tabular-nums text-ink">
          <span>{session.startedAt ? stats.wpm : "—"} WPM</span>
          <span className="text-key-muted">·</span>
          <span>{stats.accuracy}%</span>
          <span className="text-key-muted">·</span>
          <span>
            {session.durationMs && stats.remainingMs !== null
              ? formatDuration(stats.remainingMs)
              : formatDuration(stats.elapsedMs)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle
            value={mode}
            onChange={(next) => {
              setMode(next);
              recorded.current = false;
              setSession(makeSession(lesson, next));
              window.setTimeout(() => inputRef.current?.focus(), 0);
            }}
          />
          <Button
            variant="secondary"
            size="icon"
            aria-label={store.mute ? "Bật âm" : "Tắt âm"}
            onClick={() => setStore(persistMute(!store.mute))}
          >
            {store.mute ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </Button>
          <Button variant="secondary" size="icon" aria-label="Làm lại" onClick={() => setSeed((n) => n + 1)}>
            <RotateCcw className="size-4" />
          </Button>
        </div>
      </header>

      <div className="h-1.5 overflow-hidden rounded-full bg-key-muted">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-[var(--motion-quick)] ease-[var(--ease-out)]"
          style={{ width: `${Math.min(100, progress * 100)}%` }}
        />
      </div>

      <TypingPane
        session={session}
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        inputRef={inputRef}
        onKeyDown={(event) => {
          handleKeyEvent(event);
          event.stopPropagation();
        }}
        onInput={(event) => {
          if (composing.current || session.finished) return;
          if (skipInput.current) {
            skipInput.current = false;
            event.currentTarget.value = "";
            return;
          }
          const node = event.currentTarget;
          const value = node.value;
          node.value = "";
          for (const ch of value) applyChar(ch);
        }}
        onCompositionStart={() => {
          composing.current = true;
        }}
        onCompositionEnd={(event) => {
          composing.current = false;
          skipInput.current = true;
          const data = event.data ?? "";
          event.currentTarget.value = "";
          for (const ch of data) applyChar(ch);
        }}
      />

      <FingerGuide active={finger} />
      <VirtualKeyboard
        targetChar={target}
        errorFlash={flash}
        onType={applyChar}
        onBackspace={applyBackspace}
      />
    </div>
  );
}

function ModeToggle({ value, onChange }: { value: Mode; onChange: (mode: Mode) => void }) {
  return (
    <div className="flex rounded-2xl bg-surface p-1 shadow-[var(--shadow-border)]">
      {(
        [
          ["tutor", "Gia sư"],
          ["speed", "Tốc độ"],
        ] as const
      ).map(([id, label]) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            "h-9 rounded-xl px-3 text-sm font-medium transition-colors duration-[var(--motion-quick)]",
            value === id ? "bg-primary text-primary-foreground" : "text-muted hover:text-fg",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
