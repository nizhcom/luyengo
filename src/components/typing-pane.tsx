import { useEffect, useRef, type CompositionEvent, type FormEvent, type KeyboardEvent, type RefObject } from "react";
import { cn } from "@/lib/cn";
import type { CharMark, Session } from "@/lib/typing";

type Props = {
  session: Session;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  inputRef: RefObject<HTMLTextAreaElement | null>;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  onInput: (event: FormEvent<HTMLTextAreaElement>) => void;
  onCompositionStart: () => void;
  onCompositionEnd: (event: CompositionEvent<HTMLTextAreaElement>) => void;
};

export function TypingPane({
  session,
  focused,
  onFocus,
  onBlur,
  inputRef,
  onKeyDown,
  onInput,
  onCompositionStart,
  onCompositionEnd,
}: Props) {
  const currentRef = useRef<HTMLSpanElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = currentRef.current;
    const box = scrollerRef.current;
    if (!el || !box) return;
    const elTop = el.offsetTop;
    const elBottom = elTop + el.offsetHeight;
    const viewTop = box.scrollTop;
    const viewBottom = viewTop + box.clientHeight;
    if (elTop < viewTop + 8 || elBottom > viewBottom - 8) {
      el.scrollIntoView({ block: "nearest" });
    }
  }, [session.caret]);

  return (
    <div
      className={cn(
        "relative rounded-3xl bg-surface p-2 shadow-[var(--shadow-border)]",
        focused ? "ring-2 ring-primary/30" : "",
      )}
    >
      <div
        ref={scrollerRef}
        className="typing-scroll h-32 overflow-x-hidden overflow-y-auto rounded-2xl bg-ice px-5 py-3 sm:h-36 sm:px-6"
      >
        <p className="typing-text font-mono text-xl leading-loose sm:text-2xl">
          {session.target.split("").map((ch, index) => {
            const mark: CharMark =
              index === session.caret && !session.finished
                ? "pending"
                : (session.marks[index] ?? "pending");
            const isCurrent = index === session.caret && !session.finished;
            const isSpace = ch === " ";
            return (
              <span
                key={index}
                ref={isCurrent ? currentRef : undefined}
                className={cn(
                  "typing-ch",
                  isSpace && "typing-space",
                  isCurrent && "typing-current",
                  mark === "correct" && !isCurrent && "typing-ok",
                  mark === "wrong" && !isCurrent && "typing-bad",
                  mark === "pending" && !isCurrent && "typing-wait",
                )}
              >
                {isSpace ? " " : ch}
              </span>
            );
          })}
        </p>
      </div>

      <textarea
        ref={inputRef}
        autoFocus
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
        aria-label="Khung gõ bài luyện"
        className="absolute inset-0 z-10 h-full w-full resize-none rounded-3xl bg-transparent text-transparent caret-transparent"
        style={{ fontSize: 16 }}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onInput={onInput}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />

      {!focused ? (
        <p className="pointer-events-none absolute top-3 right-3 z-20 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-primary-foreground">
          Bấm vào khung chữ rồi gõ
        </p>
      ) : null}
    </div>
  );
}
