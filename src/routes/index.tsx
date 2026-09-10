import { createFileRoute, Link } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-2xl bg-primary font-display text-sm font-bold text-primary-foreground">
            10
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">GõMười</span>
        </Link>
        <p className="hidden text-sm text-muted sm:block">Gõ bằng mười ngón, không nhìn phím.</p>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <HomePage />
      </main>
    </div>
  );
}
