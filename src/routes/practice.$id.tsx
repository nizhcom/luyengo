import { createFileRoute } from "@tanstack/react-router";
import { PracticeSession } from "@/components/practice-session";

export const Route = createFileRoute("/practice/$id")({ component: PracticePage });

function PracticePage() {
  const { id } = Route.useParams();
  return (
    <div className="min-h-dvh">
      <main className="mx-auto w-full max-w-5xl px-4 py-5 pb-10 sm:px-6">
        <PracticeSession lessonId={id} />
      </main>
    </div>
  );
}
