import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import {
  KEYBOARD_GAP_PX,
  KEYBOARD_ROWS,
  type KeyDef,
  codesForChar,
  findKeyForChar,
} from "@/lib/keyboard";

const DESIGN_WIDTH = 860;

type Props = {
  targetChar: string | null;
  errorFlash: number;
  onType: (char: string) => void;
  onBackspace: () => void;
};

export function VirtualKeyboard({ targetChar, errorFlash, onType, onBackspace }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [pressed, setPressed] = useState<Set<string>>(() => new Set());
  const [shifted, setShifted] = useState(false);
  const [caps, setCaps] = useState(false);
  const [wrongCodes, setWrongCodes] = useState<string[]>([]);

  useEffect(() => {
    const parent = wrapRef.current;
    if (!parent) return;
    const ro = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? DESIGN_WIDTH;
      setScale(Math.min(1, width / DESIGN_WIDTH));
    });
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      setPressed((prev) => {
        const next = new Set(prev);
        next.add(event.code);
        return next;
      });
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") setShifted(true);
      if (event.code === "CapsLock") setCaps((value) => !value);
    };
    const up = (event: KeyboardEvent) => {
      setPressed((prev) => {
        const next = new Set(prev);
        next.delete(event.code);
        return next;
      });
      if (event.code === "ShiftLeft" || event.code === "ShiftRight") setShifted(false);
    };
    const blur = () => {
      setPressed(new Set());
      setShifted(false);
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", blur);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", blur);
    };
  }, []);

  useEffect(() => {
    if (!errorFlash) return;
    const key = targetChar ? findKeyForChar(targetChar) : null;
    setWrongCodes(key ? [key.code] : []);
    const id = window.setTimeout(() => setWrongCodes([]), 180);
    return () => window.clearTimeout(id);
  }, [errorFlash, targetChar]);

  const highlight = targetChar ? new Set(codesForChar(targetChar)) : new Set<string>();
  const useShift = shifted || caps;

  function handleClick(key: KeyDef) {
    if (key.code === "Backspace") {
      onBackspace();
      return;
    }
    if (key.code === "CapsLock") {
      setCaps((value) => !value);
      return;
    }
    if (key.code === "ShiftLeft" || key.code === "ShiftRight") {
      setShifted((value) => !value);
      return;
    }
    const ch = useShift ? (key.shiftChar ?? key.char) : key.char;
    if (ch && ch !== "\t") {
      onType(ch);
      if (shifted) setShifted(false);
    }
  }

  return (
    <div ref={wrapRef} className="w-full">
      <div
        className="relative origin-top-left"
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          marginBottom: scale < 1 ? -(1 - scale) * 268 : 0,
        }}
      >
        <div
          className="kb rounded-3xl bg-ice p-3 shadow-[var(--shadow-border)]"
          style={{ gap: KEYBOARD_GAP_PX }}
        >
          {KEYBOARD_ROWS.map((row) => (
            <div key={row[0]?.code} className="kb-row" style={{ gap: KEYBOARD_GAP_PX }}>
              {row.map((key) => {
                const active = highlight.has(key.code);
                const isPressed = pressed.has(key.code);
                const isWrong = wrongCodes.includes(key.code);
                const isMod = key.kind === "mod";
                return (
                  <button
                    key={key.code}
                    type="button"
                    tabIndex={-1}
                    aria-label={key.label}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleClick(key)}
                    style={{ flex: `${key.u} 1 0%` }}
                    className={cn(
                      "kb-key relative",
                      isMod && "kb-key-mod",
                      active && "kb-key-target",
                      isPressed && "kb-key-pressed",
                      isWrong && "kb-key-wrong",
                    )}
                  >
                    {key.shiftLabel ? (
                      <span className="flex h-full flex-col items-start justify-between px-1.5 py-1">
                        <span className="text-xs leading-none text-muted">{key.shiftLabel}</span>
                        <span className="text-sm font-semibold leading-none">{key.label}</span>
                      </span>
                    ) : (
                      <span className={cn("px-1", key.u >= 2 && "text-xs font-semibold tracking-wide")}>
                        {key.label}
                      </span>
                    )}
                    {key.home ? <i className="kb-bump" aria-hidden="true" /> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
