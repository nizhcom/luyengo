export type Mode = "tutor" | "speed";
export type CharMark = "pending" | "correct" | "wrong";

export type Session = {
  target: string;
  caret: number;
  marks: CharMark[];
  errors: number;
  strokes: number;
  startedAt: number | null;
  finishedAt: number | null;
  finished: boolean;
  mode: Mode;
  durationMs: number | null;
};

export type LiveStats = {
  wpm: number;
  accuracy: number;
  elapsedMs: number;
  remainingMs: number | null;
  correct: number;
};

export function createSession(
  target: string,
  mode: Mode,
  durationMs: number | null = null,
): Session {
  return {
    target,
    caret: 0,
    marks: Array.from({ length: target.length }, () => "pending"),
    errors: 0,
    strokes: 0,
    startedAt: null,
    finishedAt: null,
    finished: false,
    mode,
    durationMs,
  };
}

function maybeStart(session: Session, now: number): Session {
  if (session.startedAt !== null) return session;
  return { ...session, startedAt: now };
}

function withFinish(session: Session, now: number): Session {
  if (session.finished) return session;
  if (session.caret >= session.target.length) {
    return { ...session, finished: true, finishedAt: now };
  }
  if (
    session.durationMs !== null &&
    session.startedAt !== null &&
    now - session.startedAt >= session.durationMs
  ) {
    return { ...session, finished: true, finishedAt: now };
  }
  return session;
}

export function typeChar(session: Session, char: string, now: number): Session {
  if (session.finished || char.length !== 1) return session;
  let next = maybeStart(session, now);
  next = withFinish(next, now);
  if (next.finished) return next;
  if (next.caret >= next.target.length) {
    return { ...next, finished: true, finishedAt: now };
  }

  const expected = next.target[next.caret];
  const marks = next.marks.slice();
  const ok = char === expected;

  if (ok) {
    marks[next.caret] = "correct";
    next = {
      ...next,
      marks,
      caret: next.caret + 1,
      strokes: next.strokes + 1,
    };
  } else if (next.mode === "tutor") {
    next = {
      ...next,
      errors: next.errors + 1,
      strokes: next.strokes + 1,
    };
  } else {
    marks[next.caret] = "wrong";
    next = {
      ...next,
      marks,
      caret: next.caret + 1,
      errors: next.errors + 1,
      strokes: next.strokes + 1,
    };
  }

  return withFinish(next, now);
}

export function typeBackspace(session: Session): Session {
  if (session.finished || session.caret === 0) return session;
  if (session.mode === "tutor") return session;
  const marks = session.marks.slice();
  const caret = session.caret - 1;
  marks[caret] = "pending";
  return { ...session, caret, marks };
}

export function tick(session: Session, now: number): Session {
  if (session.finished || session.startedAt === null) return session;
  return withFinish(session, now);
}

export function countCorrect(session: Session): number {
  let n = 0;
  for (const mark of session.marks) if (mark === "correct") n += 1;
  return n;
}

export function liveStats(session: Session, now: number): LiveStats {
  const startedAt = session.startedAt;
  const end = session.finishedAt ?? now;
  const elapsedMs = startedAt === null ? 0 : Math.max(0, end - startedAt);
  const safeMs = Math.max(elapsedMs, 1000);
  const correct = countCorrect(session);
  const wpm = startedAt === null ? 0 : Math.round(correct / 5 / (safeMs / 60000));
  const accuracy =
    session.strokes === 0 ? 100 : Math.round(((session.strokes - session.errors) / session.strokes) * 100);
  const remainingMs =
    session.durationMs === null || startedAt === null
      ? session.durationMs
      : Math.max(0, session.durationMs - elapsedMs);
  return { wpm, accuracy, elapsedMs, remainingMs, correct };
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function expectedChar(session: Session): string | null {
  if (session.finished || session.caret >= session.target.length) return null;
  return session.target[session.caret] ?? null;
}
