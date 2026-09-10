const KEY = "gomuoi.v1";

export type LessonBest = {
  wpm: number;
  accuracy: number;
};

export type HistoryItem = {
  lessonId: string;
  wpm: number;
  accuracy: number;
  at: number;
};

export type PersistState = {
  mute: boolean;
  bestWpm: number;
  bestByLesson: Record<string, LessonBest>;
  history: HistoryItem[];
  completed: string[];
};

export const EMPTY_STATE: PersistState = {
  mute: false,
  bestWpm: 0,
  bestByLesson: {},
  history: [],
  completed: [],
};

function canUse(): boolean {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadState(): PersistState {
  if (!canUse()) return EMPTY_STATE;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as Partial<PersistState>;
    return {
      mute: Boolean(parsed.mute),
      bestWpm: Number(parsed.bestWpm) || 0,
      bestByLesson: parsed.bestByLesson ?? {},
      history: Array.isArray(parsed.history) ? parsed.history.slice(0, 20) : [],
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
    };
  } catch {
    return EMPTY_STATE;
  }
}

export function saveState(state: PersistState): void {
  if (!canUse()) return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function recordResult(lessonId: string, wpm: number, accuracy: number): PersistState {
  const prev = loadState();
  const existing = prev.bestByLesson[lessonId];
  const bestForLesson =
    !existing || wpm > existing.wpm || (wpm === existing.wpm && accuracy > existing.accuracy)
      ? { wpm, accuracy }
      : existing;
  const next: PersistState = {
    ...prev,
    bestWpm: Math.max(prev.bestWpm, wpm),
    bestByLesson: { ...prev.bestByLesson, [lessonId]: bestForLesson },
    history: [{ lessonId, wpm, accuracy, at: Date.now() }, ...prev.history].slice(0, 20),
    completed: prev.completed.includes(lessonId) ? prev.completed : [...prev.completed, lessonId],
  };
  saveState(next);
  return next;
}

export function setMute(mute: boolean): PersistState {
  const next = { ...loadState(), mute };
  saveState(next);
  return next;
}
