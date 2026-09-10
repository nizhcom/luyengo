export type Finger = "lp" | "lr" | "lm" | "li" | "th" | "ri" | "rm" | "rr" | "rp";

export type KeyDef = {
  code: string;
  label: string;
  shiftLabel?: string;
  char?: string;
  shiftChar?: string;
  /** Width in key units. One row always sums to KEYBOARD_UNITS. */
  u: number;
  finger: Finger;
  home?: boolean;
  kind?: "char" | "mod";
};

export const KEYBOARD_UNITS = 15;
export const KEYBOARD_GAP_PX = 6;

export const FINGER_LABEL: Record<Finger, string> = {
  lp: "Út trái",
  lr: "Nhẫn trái",
  lm: "Giữa trái",
  li: "Trỏ trái",
  th: "Ngón cái",
  ri: "Trỏ phải",
  rm: "Giữa phải",
  rr: "Nhẫn phải",
  rp: "Út phải",
};

export const FINGER_HAND: Record<Finger, "left" | "right" | "thumb"> = {
  lp: "left",
  lr: "left",
  lm: "left",
  li: "left",
  th: "thumb",
  ri: "right",
  rm: "right",
  rr: "right",
  rp: "right",
};

export const KEYBOARD_ROWS: KeyDef[][] = [
  [
    { code: "Backquote", label: "`", shiftLabel: "~", char: "`", shiftChar: "~", u: 1, finger: "lp" },
    { code: "Digit1", label: "1", shiftLabel: "!", char: "1", shiftChar: "!", u: 1, finger: "lp" },
    { code: "Digit2", label: "2", shiftLabel: "@", char: "2", shiftChar: "@", u: 1, finger: "lr" },
    { code: "Digit3", label: "3", shiftLabel: "#", char: "3", shiftChar: "#", u: 1, finger: "lm" },
    { code: "Digit4", label: "4", shiftLabel: "$", char: "4", shiftChar: "$", u: 1, finger: "li" },
    { code: "Digit5", label: "5", shiftLabel: "%", char: "5", shiftChar: "%", u: 1, finger: "li" },
    { code: "Digit6", label: "6", shiftLabel: "^", char: "6", shiftChar: "^", u: 1, finger: "ri" },
    { code: "Digit7", label: "7", shiftLabel: "&", char: "7", shiftChar: "&", u: 1, finger: "ri" },
    { code: "Digit8", label: "8", shiftLabel: "*", char: "8", shiftChar: "*", u: 1, finger: "rm" },
    { code: "Digit9", label: "9", shiftLabel: "(", char: "9", shiftChar: "(", u: 1, finger: "rr" },
    { code: "Digit0", label: "0", shiftLabel: ")", char: "0", shiftChar: ")", u: 1, finger: "rp" },
    { code: "Minus", label: "-", shiftLabel: "_", char: "-", shiftChar: "_", u: 1, finger: "rp" },
    { code: "Equal", label: "=", shiftLabel: "+", char: "=", shiftChar: "+", u: 1, finger: "rp" },
    { code: "Backspace", label: "Xóa", u: 2, finger: "rp", kind: "mod" },
  ],
  [
    { code: "Tab", label: "Tab", char: "\t", u: 1.5, finger: "lp", kind: "mod" },
    { code: "KeyQ", label: "Q", char: "q", shiftChar: "Q", u: 1, finger: "lp" },
    { code: "KeyW", label: "W", char: "w", shiftChar: "W", u: 1, finger: "lr" },
    { code: "KeyE", label: "E", char: "e", shiftChar: "E", u: 1, finger: "lm" },
    { code: "KeyR", label: "R", char: "r", shiftChar: "R", u: 1, finger: "li" },
    { code: "KeyT", label: "T", char: "t", shiftChar: "T", u: 1, finger: "li" },
    { code: "KeyY", label: "Y", char: "y", shiftChar: "Y", u: 1, finger: "ri" },
    { code: "KeyU", label: "U", char: "u", shiftChar: "U", u: 1, finger: "ri" },
    { code: "KeyI", label: "I", char: "i", shiftChar: "I", u: 1, finger: "rm" },
    { code: "KeyO", label: "O", char: "o", shiftChar: "O", u: 1, finger: "rr" },
    { code: "KeyP", label: "P", char: "p", shiftChar: "P", u: 1, finger: "rp" },
    { code: "BracketLeft", label: "[", shiftLabel: "{", char: "[", shiftChar: "{", u: 1, finger: "rp" },
    { code: "BracketRight", label: "]", shiftLabel: "}", char: "]", shiftChar: "}", u: 1, finger: "rp" },
    { code: "Backslash", label: "\\", shiftLabel: "|", char: "\\", shiftChar: "|", u: 1.5, finger: "rp" },
  ],
  [
    { code: "CapsLock", label: "Caps", u: 1.75, finger: "lp", kind: "mod" },
    { code: "KeyA", label: "A", char: "a", shiftChar: "A", u: 1, finger: "lp", home: true },
    { code: "KeyS", label: "S", char: "s", shiftChar: "S", u: 1, finger: "lr", home: true },
    { code: "KeyD", label: "D", char: "d", shiftChar: "D", u: 1, finger: "lm", home: true },
    { code: "KeyF", label: "F", char: "f", shiftChar: "F", u: 1, finger: "li", home: true },
    { code: "KeyG", label: "G", char: "g", shiftChar: "G", u: 1, finger: "li" },
    { code: "KeyH", label: "H", char: "h", shiftChar: "H", u: 1, finger: "ri" },
    { code: "KeyJ", label: "J", char: "j", shiftChar: "J", u: 1, finger: "ri", home: true },
    { code: "KeyK", label: "K", char: "k", shiftChar: "K", u: 1, finger: "rm", home: true },
    { code: "KeyL", label: "L", char: "l", shiftChar: "L", u: 1, finger: "rr", home: true },
    { code: "Semicolon", label: ";", shiftLabel: ":", char: ";", shiftChar: ":", u: 1, finger: "rp", home: true },
    { code: "Quote", label: "'", shiftLabel: '"', char: "'", shiftChar: '"', u: 1, finger: "rp" },
    { code: "Enter", label: "Enter", u: 2.25, finger: "rp", kind: "mod" },
  ],
  [
    { code: "ShiftLeft", label: "Shift", u: 2.25, finger: "lp", kind: "mod" },
    { code: "KeyZ", label: "Z", char: "z", shiftChar: "Z", u: 1, finger: "lp" },
    { code: "KeyX", label: "X", char: "x", shiftChar: "X", u: 1, finger: "lr" },
    { code: "KeyC", label: "C", char: "c", shiftChar: "C", u: 1, finger: "lm" },
    { code: "KeyV", label: "V", char: "v", shiftChar: "V", u: 1, finger: "li" },
    { code: "KeyB", label: "B", char: "b", shiftChar: "B", u: 1, finger: "li" },
    { code: "KeyN", label: "N", char: "n", shiftChar: "N", u: 1, finger: "ri" },
    { code: "KeyM", label: "M", char: "m", shiftChar: "M", u: 1, finger: "ri" },
    { code: "Comma", label: ",", shiftLabel: "<", char: ",", shiftChar: "<", u: 1, finger: "rm" },
    { code: "Period", label: ".", shiftLabel: ">", char: ".", shiftChar: ">", u: 1, finger: "rr" },
    { code: "Slash", label: "/", shiftLabel: "?", char: "/", shiftChar: "?", u: 1, finger: "rp" },
    { code: "ShiftRight", label: "Shift", u: 2.75, finger: "rp", kind: "mod" },
  ],
  [
    { code: "ControlLeft", label: "Ctrl", u: 1.25, finger: "lp", kind: "mod" },
    { code: "MetaLeft", label: "Win", u: 1.25, finger: "lp", kind: "mod" },
    { code: "AltLeft", label: "Alt", u: 1.25, finger: "lp", kind: "mod" },
    { code: "Space", label: "Cách", char: " ", u: 6.25, finger: "th", kind: "mod" },
    { code: "AltRight", label: "Alt", u: 1.25, finger: "rp", kind: "mod" },
    { code: "MetaRight", label: "Win", u: 1.25, finger: "rp", kind: "mod" },
    { code: "ContextMenu", label: "Menu", u: 1.25, finger: "rp", kind: "mod" },
    { code: "ControlRight", label: "Ctrl", u: 1.25, finger: "rp", kind: "mod" },
  ],
];

const ALL_KEYS = KEYBOARD_ROWS.flat();

const CHAR_INDEX = new Map<string, KeyDef>();
for (const key of ALL_KEYS) {
  if (key.char !== undefined) CHAR_INDEX.set(key.char, key);
  if (key.shiftChar !== undefined) CHAR_INDEX.set(key.shiftChar, key);
}

export function rowUnits(row: KeyDef[]): number {
  return row.reduce((sum, key) => sum + key.u, 0);
}

export function findKeyByCode(code: string): KeyDef | undefined {
  return ALL_KEYS.find((key) => key.code === code);
}

export function findKeyForChar(char: string): KeyDef | undefined {
  return CHAR_INDEX.get(char);
}

export function isShiftedChar(char: string): boolean {
  const key = CHAR_INDEX.get(char);
  if (!key) return false;
  return key.shiftChar === char && key.char !== char;
}

export function shiftCodeForChar(char: string): "ShiftLeft" | "ShiftRight" | null {
  const key = findKeyForChar(char);
  if (!key || !isShiftedChar(char)) return null;
  return FINGER_HAND[key.finger] === "left" ? "ShiftRight" : "ShiftLeft";
}

export function codesForChar(char: string): string[] {
  const key = findKeyForChar(char);
  if (!key) return [];
  const shift = shiftCodeForChar(char);
  return shift ? [key.code, shift] : [key.code];
}

export function fingerForChar(char: string): Finger | null {
  return findKeyForChar(char)?.finger ?? null;
}

export function charFromKey(code: string, shifted: boolean): string | null {
  const key = findKeyByCode(code);
  if (!key) return null;
  if (shifted) return key.shiftChar ?? key.char ?? null;
  return key.char ?? null;
}
