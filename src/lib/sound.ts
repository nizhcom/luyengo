let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  return ctx;
}

function beep(freq: number, duration: number, gainValue: number, type: OscillatorType) {
  const ac = audio();
  if (!ac) return;
  void ac.resume();
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.value = gainValue;
  gain.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.start();
  osc.stop(ac.currentTime + duration);
}

export function playCorrect(mute: boolean) {
  if (mute) return;
  beep(880, 0.04, 0.03, "sine");
}

export function playError(mute: boolean) {
  if (mute) return;
  beep(220, 0.09, 0.05, "triangle");
}

export function playDone(mute: boolean) {
  if (mute) return;
  beep(523, 0.08, 0.04, "sine");
  setTimeout(() => beep(784, 0.12, 0.04, "sine"), 90);
}
