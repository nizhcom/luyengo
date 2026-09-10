import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Keyboard, Timer, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { CUSTOM_TEXT_KEY, LESSONS, LESSON_GROUPS, type Lesson } from "@/lib/lessons";
import { EMPTY_STATE, loadState } from "@/lib/persist";

export function HomePage() {
  const [store, setStore] = useState(EMPTY_STATE);
  const navigate = useNavigate();
  const [custom, setCustom] = useState("");

  useEffect(() => {
    setStore(loadState());
  }, []);

  function startCustom() {
    const text = custom.replace(/\s+/g, " ").trim();
    if (text.length < 8) return;
    window.sessionStorage.setItem(CUSTOM_TEXT_KEY, text);
    void navigate({ to: "/practice/$id", params: { id: "custom" } });
  }

  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <div className="rounded-3xl bg-surface p-7 shadow-[var(--shadow-border)] sm:p-9">
          <p className="text-sm font-medium text-primary">Luyện gõ mười ngón</p>
          <h1 className="mt-2 max-w-lg font-display text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">
            Đặt tay đúng, gõ đều, nhanh lên từng ngày.
          </h1>
          <p className="mt-4 max-w-md text-pretty text-muted">
            Bài ngắn theo hàng phím, từ, câu và thử thách tốc độ. Bàn phím trên màn hình
            sáng đúng phím và đúng ngón.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link to="/practice/$id" params={{ id: "home" }}>
                Bắt đầu hàng giữa
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/practice/$id" params={{ id: "timed-60" }}>
                Đo 1 phút
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          <HeroStat icon={Trophy} label="Kỷ lục" value={store.bestWpm ? `${store.bestWpm} WPM` : "—"} />
          <HeroStat icon={Keyboard} label="Bài đã xong" value={String(store.completed.length)} />
          <HeroStat
            icon={Timer}
            label="Lần gần nhất"
            value={store.history[0] ? `${store.history[0].wpm} WPM` : "—"}
          />
        </div>
      </section>

      {LESSON_GROUPS.map((group) => (
        <section key={group} className="flex flex-col gap-4">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">{group}</h2>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {LESSONS.filter((lesson) => lesson.group === group).map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                best={store.bestByLesson[lesson.id]}
                done={store.completed.includes(lesson.id)}
                custom={custom}
                onCustomChange={setCustom}
                onStartCustom={startCustom}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function HeroStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col justify-center rounded-3xl bg-surface px-4 py-4 shadow-[var(--shadow-border)] sm:px-5">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="size-4" />
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-2 font-mono text-xl font-semibold tabular-nums text-ink sm:text-2xl">{value}</p>
    </div>
  );
}

function LessonCard({
  lesson,
  best,
  done,
  custom,
  onCustomChange,
  onStartCustom,
}: {
  lesson: Lesson;
  best?: { wpm: number; accuracy: number };
  done: boolean;
  custom: string;
  onCustomChange: (value: string) => void;
  onStartCustom: () => void;
}) {
  if (lesson.kind === "custom") {
    return (
      <div className="flex flex-col gap-3 rounded-3xl bg-surface p-5 shadow-[var(--shadow-border)] sm:col-span-2 xl:col-span-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{lesson.title}</h3>
          <p className="mt-1 text-sm text-muted">{lesson.blurb}</p>
        </div>
        <textarea
          value={custom}
          onChange={(event) => onCustomChange(event.target.value)}
          placeholder="Dán đoạn văn muốn luyện…"
          rows={4}
          className="w-full resize-y rounded-2xl border-0 bg-ice px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/40"
        />
        <div>
          <Button onClick={onStartCustom} disabled={custom.trim().length < 8}>
            Luyện đoạn này
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Link
      to="/practice/$id"
      params={{ id: lesson.id }}
      className={cn(
        "group flex flex-col rounded-3xl bg-surface p-5 shadow-[var(--shadow-border)]",
        "transition-[transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
        "hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-ink">{lesson.title}</h3>
        {done ? (
          <span className="rounded-full bg-good/10 px-2 py-0.5 text-xs font-medium text-good">Đã luyện</span>
        ) : null}
      </div>
      <p className="mt-1 flex-1 text-sm text-muted">{lesson.blurb}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium text-primary">
          {best ? `${best.wpm} WPM` : lesson.mode === "tutor" ? "Gia sư" : "Tốc độ"}
        </span>
        <ArrowRight className="size-4 text-muted transition-transform duration-[var(--motion-quick)] group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
