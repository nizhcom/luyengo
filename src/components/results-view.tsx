import { Link } from "@tanstack/react-router";
import { RotateCcw, ArrowRight, House } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDuration, type LiveStats } from "@/lib/typing";

type Props = {
  title: string;
  stats: LiveStats;
  best?: { wpm: number; accuracy: number };
  nextId: string | null;
  onRetry: () => void;
};

export function ResultsView({ title, stats, best, nextId, onRetry }: Props) {
  return (
    <section className="mx-auto flex w-full max-w-xl flex-col gap-6">
      <div className="rounded-3xl bg-surface p-8 shadow-[var(--shadow-border)]">
        <p className="text-sm font-medium text-primary">Hoàn thành</p>
        <h1 className="mt-1 font-display text-3xl font-semibold tracking-tight text-ink text-balance">
          {title}
        </h1>
        <dl className="mt-8 grid grid-cols-3 gap-3">
          <Stat label="Tốc độ" value={`${stats.wpm}`} unit="WPM" />
          <Stat label="Chính xác" value={`${stats.accuracy}`} unit="%" />
          <Stat label="Thời gian" value={formatDuration(stats.elapsedMs)} unit="" />
        </dl>
        {best ? (
          <p className="mt-5 text-sm text-muted">
            Kỷ lục bài này: <span className="font-semibold text-fg">{best.wpm} WPM</span> · {best.accuracy}%
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={onRetry}>
            <RotateCcw className="size-4" />
            Thử lại
          </Button>
          {nextId ? (
            <Button variant="secondary" asChild>
              <Link to="/practice/$id" params={{ id: nextId }}>
                Bài tiếp
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <Button variant="secondary" asChild>
              <Link to="/">
                <House className="size-4" />
                Về trang chủ
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-2xl bg-ice px-3 py-4 text-center">
      <dt className="text-xs font-medium uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-1 font-mono text-2xl font-semibold tabular-nums text-ink">
        {value}
        {unit ? <span className="ml-1 text-xs font-medium text-muted">{unit}</span> : null}
      </dd>
    </div>
  );
}
