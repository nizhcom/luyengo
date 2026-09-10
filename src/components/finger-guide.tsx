import { cn } from "@/lib/cn";
import { FINGER_LABEL, type Finger } from "@/lib/keyboard";

const ORDER: Finger[] = ["lp", "lr", "lm", "li", "th", "th", "ri", "rm", "rr", "rp"];

type Props = {
  active: Finger | null;
};

export function FingerGuide({ active }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-end justify-center gap-1.5 sm:gap-2">
        {ORDER.map((finger, index) => {
          const thumb = finger === "th";
          const on = active === finger;
          return (
            <span
              key={`${finger}-${index}`}
              title={FINGER_LABEL[finger]}
              className={cn(
                "rounded-full transition-[transform,background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
                thumb ? "h-7 w-10 sm:h-8 sm:w-12" : "h-9 w-7 sm:h-10 sm:w-8",
                on
                  ? "bg-primary shadow-[0_8px_18px_-8px_var(--color-primary)]"
                  : "bg-key-muted",
              )}
            />
          );
        })}
      </div>
      <p className="text-center text-sm text-muted">
        {active ? (
          <>
            Dùng <span className="font-semibold text-fg">{FINGER_LABEL[active]}</span>
          </>
        ) : (
          "Đặt ngón trỏ lên F và J — hai phím có gờ."
        )}
      </p>
    </div>
  );
}
