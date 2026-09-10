import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as House, l as ArrowRight, n as Volume2, o as RotateCcw, t as VolumeX, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { n as Route } from "./router-SwWb-zkA.mjs";
import { c as getLesson, d as recordResult, f as setMute, l as loadState, o as buildLessonText, r as EMPTY_STATE, s as cn, t as Button, u as nextLessonId } from "./persist-Jdvekm1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/practice._id-hhhwQe3p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FINGER_LABEL = {
	lp: "Út trái",
	lr: "Nhẫn trái",
	lm: "Giữa trái",
	li: "Trỏ trái",
	th: "Ngón cái",
	ri: "Trỏ phải",
	rm: "Giữa phải",
	rr: "Nhẫn phải",
	rp: "Út phải"
};
var FINGER_HAND = {
	lp: "left",
	lr: "left",
	lm: "left",
	li: "left",
	th: "thumb",
	ri: "right",
	rm: "right",
	rr: "right",
	rp: "right"
};
var KEYBOARD_ROWS = [
	[
		{
			code: "Backquote",
			label: "`",
			shiftLabel: "~",
			char: "`",
			shiftChar: "~",
			u: 1,
			finger: "lp"
		},
		{
			code: "Digit1",
			label: "1",
			shiftLabel: "!",
			char: "1",
			shiftChar: "!",
			u: 1,
			finger: "lp"
		},
		{
			code: "Digit2",
			label: "2",
			shiftLabel: "@",
			char: "2",
			shiftChar: "@",
			u: 1,
			finger: "lr"
		},
		{
			code: "Digit3",
			label: "3",
			shiftLabel: "#",
			char: "3",
			shiftChar: "#",
			u: 1,
			finger: "lm"
		},
		{
			code: "Digit4",
			label: "4",
			shiftLabel: "$",
			char: "4",
			shiftChar: "$",
			u: 1,
			finger: "li"
		},
		{
			code: "Digit5",
			label: "5",
			shiftLabel: "%",
			char: "5",
			shiftChar: "%",
			u: 1,
			finger: "li"
		},
		{
			code: "Digit6",
			label: "6",
			shiftLabel: "^",
			char: "6",
			shiftChar: "^",
			u: 1,
			finger: "ri"
		},
		{
			code: "Digit7",
			label: "7",
			shiftLabel: "&",
			char: "7",
			shiftChar: "&",
			u: 1,
			finger: "ri"
		},
		{
			code: "Digit8",
			label: "8",
			shiftLabel: "*",
			char: "8",
			shiftChar: "*",
			u: 1,
			finger: "rm"
		},
		{
			code: "Digit9",
			label: "9",
			shiftLabel: "(",
			char: "9",
			shiftChar: "(",
			u: 1,
			finger: "rr"
		},
		{
			code: "Digit0",
			label: "0",
			shiftLabel: ")",
			char: "0",
			shiftChar: ")",
			u: 1,
			finger: "rp"
		},
		{
			code: "Minus",
			label: "-",
			shiftLabel: "_",
			char: "-",
			shiftChar: "_",
			u: 1,
			finger: "rp"
		},
		{
			code: "Equal",
			label: "=",
			shiftLabel: "+",
			char: "=",
			shiftChar: "+",
			u: 1,
			finger: "rp"
		},
		{
			code: "Backspace",
			label: "Xóa",
			u: 2,
			finger: "rp",
			kind: "mod"
		}
	],
	[
		{
			code: "Tab",
			label: "Tab",
			char: "	",
			u: 1.5,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "KeyQ",
			label: "Q",
			char: "q",
			shiftChar: "Q",
			u: 1,
			finger: "lp"
		},
		{
			code: "KeyW",
			label: "W",
			char: "w",
			shiftChar: "W",
			u: 1,
			finger: "lr"
		},
		{
			code: "KeyE",
			label: "E",
			char: "e",
			shiftChar: "E",
			u: 1,
			finger: "lm"
		},
		{
			code: "KeyR",
			label: "R",
			char: "r",
			shiftChar: "R",
			u: 1,
			finger: "li"
		},
		{
			code: "KeyT",
			label: "T",
			char: "t",
			shiftChar: "T",
			u: 1,
			finger: "li"
		},
		{
			code: "KeyY",
			label: "Y",
			char: "y",
			shiftChar: "Y",
			u: 1,
			finger: "ri"
		},
		{
			code: "KeyU",
			label: "U",
			char: "u",
			shiftChar: "U",
			u: 1,
			finger: "ri"
		},
		{
			code: "KeyI",
			label: "I",
			char: "i",
			shiftChar: "I",
			u: 1,
			finger: "rm"
		},
		{
			code: "KeyO",
			label: "O",
			char: "o",
			shiftChar: "O",
			u: 1,
			finger: "rr"
		},
		{
			code: "KeyP",
			label: "P",
			char: "p",
			shiftChar: "P",
			u: 1,
			finger: "rp"
		},
		{
			code: "BracketLeft",
			label: "[",
			shiftLabel: "{",
			char: "[",
			shiftChar: "{",
			u: 1,
			finger: "rp"
		},
		{
			code: "BracketRight",
			label: "]",
			shiftLabel: "}",
			char: "]",
			shiftChar: "}",
			u: 1,
			finger: "rp"
		},
		{
			code: "Backslash",
			label: "\\",
			shiftLabel: "|",
			char: "\\",
			shiftChar: "|",
			u: 1.5,
			finger: "rp"
		}
	],
	[
		{
			code: "CapsLock",
			label: "Caps",
			u: 1.75,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "KeyA",
			label: "A",
			char: "a",
			shiftChar: "A",
			u: 1,
			finger: "lp",
			home: true
		},
		{
			code: "KeyS",
			label: "S",
			char: "s",
			shiftChar: "S",
			u: 1,
			finger: "lr",
			home: true
		},
		{
			code: "KeyD",
			label: "D",
			char: "d",
			shiftChar: "D",
			u: 1,
			finger: "lm",
			home: true
		},
		{
			code: "KeyF",
			label: "F",
			char: "f",
			shiftChar: "F",
			u: 1,
			finger: "li",
			home: true
		},
		{
			code: "KeyG",
			label: "G",
			char: "g",
			shiftChar: "G",
			u: 1,
			finger: "li"
		},
		{
			code: "KeyH",
			label: "H",
			char: "h",
			shiftChar: "H",
			u: 1,
			finger: "ri"
		},
		{
			code: "KeyJ",
			label: "J",
			char: "j",
			shiftChar: "J",
			u: 1,
			finger: "ri",
			home: true
		},
		{
			code: "KeyK",
			label: "K",
			char: "k",
			shiftChar: "K",
			u: 1,
			finger: "rm",
			home: true
		},
		{
			code: "KeyL",
			label: "L",
			char: "l",
			shiftChar: "L",
			u: 1,
			finger: "rr",
			home: true
		},
		{
			code: "Semicolon",
			label: ";",
			shiftLabel: ":",
			char: ";",
			shiftChar: ":",
			u: 1,
			finger: "rp",
			home: true
		},
		{
			code: "Quote",
			label: "'",
			shiftLabel: "\"",
			char: "'",
			shiftChar: "\"",
			u: 1,
			finger: "rp"
		},
		{
			code: "Enter",
			label: "Enter",
			u: 2.25,
			finger: "rp",
			kind: "mod"
		}
	],
	[
		{
			code: "ShiftLeft",
			label: "Shift",
			u: 2.25,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "KeyZ",
			label: "Z",
			char: "z",
			shiftChar: "Z",
			u: 1,
			finger: "lp"
		},
		{
			code: "KeyX",
			label: "X",
			char: "x",
			shiftChar: "X",
			u: 1,
			finger: "lr"
		},
		{
			code: "KeyC",
			label: "C",
			char: "c",
			shiftChar: "C",
			u: 1,
			finger: "lm"
		},
		{
			code: "KeyV",
			label: "V",
			char: "v",
			shiftChar: "V",
			u: 1,
			finger: "li"
		},
		{
			code: "KeyB",
			label: "B",
			char: "b",
			shiftChar: "B",
			u: 1,
			finger: "li"
		},
		{
			code: "KeyN",
			label: "N",
			char: "n",
			shiftChar: "N",
			u: 1,
			finger: "ri"
		},
		{
			code: "KeyM",
			label: "M",
			char: "m",
			shiftChar: "M",
			u: 1,
			finger: "ri"
		},
		{
			code: "Comma",
			label: ",",
			shiftLabel: "<",
			char: ",",
			shiftChar: "<",
			u: 1,
			finger: "rm"
		},
		{
			code: "Period",
			label: ".",
			shiftLabel: ">",
			char: ".",
			shiftChar: ">",
			u: 1,
			finger: "rr"
		},
		{
			code: "Slash",
			label: "/",
			shiftLabel: "?",
			char: "/",
			shiftChar: "?",
			u: 1,
			finger: "rp"
		},
		{
			code: "ShiftRight",
			label: "Shift",
			u: 2.75,
			finger: "rp",
			kind: "mod"
		}
	],
	[
		{
			code: "ControlLeft",
			label: "Ctrl",
			u: 1.25,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "MetaLeft",
			label: "Win",
			u: 1.25,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "AltLeft",
			label: "Alt",
			u: 1.25,
			finger: "lp",
			kind: "mod"
		},
		{
			code: "Space",
			label: "Cách",
			char: " ",
			u: 6.25,
			finger: "th",
			kind: "mod"
		},
		{
			code: "AltRight",
			label: "Alt",
			u: 1.25,
			finger: "rp",
			kind: "mod"
		},
		{
			code: "MetaRight",
			label: "Win",
			u: 1.25,
			finger: "rp",
			kind: "mod"
		},
		{
			code: "ContextMenu",
			label: "Menu",
			u: 1.25,
			finger: "rp",
			kind: "mod"
		},
		{
			code: "ControlRight",
			label: "Ctrl",
			u: 1.25,
			finger: "rp",
			kind: "mod"
		}
	]
];
var ALL_KEYS = KEYBOARD_ROWS.flat();
var CHAR_INDEX = /* @__PURE__ */ new Map();
for (const key of ALL_KEYS) {
	if (key.char !== void 0) CHAR_INDEX.set(key.char, key);
	if (key.shiftChar !== void 0) CHAR_INDEX.set(key.shiftChar, key);
}
function findKeyForChar(char) {
	return CHAR_INDEX.get(char);
}
function isShiftedChar(char) {
	const key = CHAR_INDEX.get(char);
	if (!key) return false;
	return key.shiftChar === char && key.char !== char;
}
function shiftCodeForChar(char) {
	const key = findKeyForChar(char);
	if (!key || !isShiftedChar(char)) return null;
	return FINGER_HAND[key.finger] === "left" ? "ShiftRight" : "ShiftLeft";
}
function codesForChar(char) {
	const key = findKeyForChar(char);
	if (!key) return [];
	const shift = shiftCodeForChar(char);
	return shift ? [key.code, shift] : [key.code];
}
function fingerForChar(char) {
	return findKeyForChar(char)?.finger ?? null;
}
var ORDER = [
	"lp",
	"lr",
	"lm",
	"li",
	"th",
	"th",
	"ri",
	"rm",
	"rr",
	"rp"
];
function FingerGuide({ active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-end justify-center gap-1.5 sm:gap-2",
			children: ORDER.map((finger, index) => {
				const thumb = finger === "th";
				const on = active === finger;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					title: FINGER_LABEL[finger],
					className: cn("rounded-full transition-[transform,background-color,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]", thumb ? "h-7 w-10 sm:h-8 sm:w-12" : "h-9 w-7 sm:h-10 sm:w-8", on ? "bg-primary shadow-[0_8px_18px_-8px_var(--color-primary)]" : "bg-key-muted")
				}, `${finger}-${index}`);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-center text-sm text-muted",
			children: active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Dùng ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-fg",
				children: FINGER_LABEL[active]
			})] }) : "Đặt ngón trỏ lên F và J — hai phím có gờ."
		})]
	});
}
function createSession(target, mode, durationMs = null) {
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
		durationMs
	};
}
function maybeStart(session, now) {
	if (session.startedAt !== null) return session;
	return {
		...session,
		startedAt: now
	};
}
function withFinish(session, now) {
	if (session.finished) return session;
	if (session.caret >= session.target.length) return {
		...session,
		finished: true,
		finishedAt: now
	};
	if (session.durationMs !== null && session.startedAt !== null && now - session.startedAt >= session.durationMs) return {
		...session,
		finished: true,
		finishedAt: now
	};
	return session;
}
function typeChar(session, char, now) {
	if (session.finished || char.length !== 1) return session;
	let next = maybeStart(session, now);
	next = withFinish(next, now);
	if (next.finished) return next;
	if (next.caret >= next.target.length) return {
		...next,
		finished: true,
		finishedAt: now
	};
	const expected = next.target[next.caret];
	const marks = next.marks.slice();
	if (char === expected) {
		marks[next.caret] = "correct";
		next = {
			...next,
			marks,
			caret: next.caret + 1,
			strokes: next.strokes + 1
		};
	} else if (next.mode === "tutor") next = {
		...next,
		errors: next.errors + 1,
		strokes: next.strokes + 1
	};
	else {
		marks[next.caret] = "wrong";
		next = {
			...next,
			marks,
			caret: next.caret + 1,
			errors: next.errors + 1,
			strokes: next.strokes + 1
		};
	}
	return withFinish(next, now);
}
function typeBackspace(session) {
	if (session.finished || session.caret === 0) return session;
	if (session.mode === "tutor") return session;
	const marks = session.marks.slice();
	const caret = session.caret - 1;
	marks[caret] = "pending";
	return {
		...session,
		caret,
		marks
	};
}
function tick(session, now) {
	if (session.finished || session.startedAt === null) return session;
	return withFinish(session, now);
}
function countCorrect(session) {
	let n = 0;
	for (const mark of session.marks) if (mark === "correct") n += 1;
	return n;
}
function liveStats(session, now) {
	const startedAt = session.startedAt;
	const end = session.finishedAt ?? now;
	const elapsedMs = startedAt === null ? 0 : Math.max(0, end - startedAt);
	const safeMs = Math.max(elapsedMs, 1e3);
	const correct = countCorrect(session);
	return {
		wpm: startedAt === null ? 0 : Math.round(correct / 5 / (safeMs / 6e4)),
		accuracy: session.strokes === 0 ? 100 : Math.round((session.strokes - session.errors) / session.strokes * 100),
		elapsedMs,
		remainingMs: session.durationMs === null || startedAt === null ? session.durationMs : Math.max(0, session.durationMs - elapsedMs),
		correct
	};
}
function formatDuration(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	return `${Math.floor(total / 60)}:${(total % 60).toString().padStart(2, "0")}`;
}
function expectedChar(session) {
	if (session.finished || session.caret >= session.target.length) return null;
	return session.target[session.caret] ?? null;
}
function ResultsView({ title, stats, best, nextId, onRetry }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto flex w-full max-w-xl flex-col gap-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-3xl bg-surface p-8 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-primary",
					children: "Hoàn thành"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-3xl font-semibold tracking-tight text-ink text-balance",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Tốc độ",
							value: `${stats.wpm}`,
							unit: "WPM"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Chính xác",
							value: `${stats.accuracy}`,
							unit: "%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Thời gian",
							value: formatDuration(stats.elapsedMs),
							unit: ""
						})
					]
				}),
				best ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-5 text-sm text-muted",
					children: [
						"Kỷ lục bài này: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-fg",
							children: [best.wpm, " WPM"]
						}),
						" · ",
						best.accuracy,
						"%"
					]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: onRetry,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Thử lại"]
					}), nextId ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/practice/$id",
							params: { id: nextId },
							children: ["Bài tiếp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "secondary",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "Về trang chủ"]
						})
					})]
				})
			]
		})
	});
}
function Stat({ label, value, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-ice px-3 py-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs font-medium uppercase tracking-wide text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
			className: "mt-1 font-mono text-2xl font-semibold tabular-nums text-ink",
			children: [value, unit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ml-1 text-xs font-medium text-muted",
				children: unit
			}) : null]
		})]
	});
}
function TypingPane({ session, focused, onFocus, onBlur, inputRef, onKeyDown, onInput, onCompositionStart, onCompositionEnd }) {
	const currentRef = (0, import_react.useRef)(null);
	const scrollerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = currentRef.current;
		const box = scrollerRef.current;
		if (!el || !box) return;
		const elTop = el.offsetTop;
		const elBottom = elTop + el.offsetHeight;
		const viewTop = box.scrollTop;
		const viewBottom = viewTop + box.clientHeight;
		if (elTop < viewTop + 8 || elBottom > viewBottom - 8) el.scrollIntoView({ block: "nearest" });
	}, [session.caret]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative rounded-3xl bg-surface p-2 shadow-[var(--shadow-border)]", focused ? "ring-2 ring-primary/30" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scrollerRef,
				className: "typing-scroll h-32 overflow-x-hidden overflow-y-auto rounded-2xl bg-ice px-5 py-3 sm:h-36 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "typing-text font-mono text-xl leading-loose sm:text-2xl",
					children: session.target.split("").map((ch, index) => {
						const mark = index === session.caret && !session.finished ? "pending" : session.marks[index] ?? "pending";
						const isCurrent = index === session.caret && !session.finished;
						const isSpace = ch === " ";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							ref: isCurrent ? currentRef : void 0,
							className: cn("typing-ch", isSpace && "typing-space", isCurrent && "typing-current", mark === "correct" && !isCurrent && "typing-ok", mark === "wrong" && !isCurrent && "typing-bad", mark === "pending" && !isCurrent && "typing-wait"),
							children: isSpace ? " " : ch
						}, index);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				ref: inputRef,
				autoFocus: true,
				autoCapitalize: "off",
				autoCorrect: "off",
				autoComplete: "off",
				spellCheck: false,
				"aria-label": "Khung gõ bài luyện",
				className: "absolute inset-0 z-10 h-full w-full resize-none rounded-3xl bg-transparent text-transparent caret-transparent",
				style: { fontSize: 16 },
				onFocus,
				onBlur,
				onKeyDown,
				onInput,
				onCompositionStart,
				onCompositionEnd
			}),
			!focused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "pointer-events-none absolute top-3 right-3 z-20 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-primary-foreground",
				children: "Bấm vào khung chữ rồi gõ"
			}) : null
		]
	});
}
var DESIGN_WIDTH = 860;
function VirtualKeyboard({ targetChar, errorFlash, onType, onBackspace }) {
	const wrapRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(1);
	const [pressed, setPressed] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
	const [shifted, setShifted] = (0, import_react.useState)(false);
	const [caps, setCaps] = (0, import_react.useState)(false);
	const [wrongCodes, setWrongCodes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const parent = wrapRef.current;
		if (!parent) return;
		const ro = new ResizeObserver((entries) => {
			const width = entries[0]?.contentRect.width ?? DESIGN_WIDTH;
			setScale(Math.min(1, width / DESIGN_WIDTH));
		});
		ro.observe(parent);
		return () => ro.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const down = (event) => {
			setPressed((prev) => {
				const next = new Set(prev);
				next.add(event.code);
				return next;
			});
			if (event.code === "ShiftLeft" || event.code === "ShiftRight") setShifted(true);
			if (event.code === "CapsLock") setCaps((value) => !value);
		};
		const up = (event) => {
			setPressed((prev) => {
				const next = new Set(prev);
				next.delete(event.code);
				return next;
			});
			if (event.code === "ShiftLeft" || event.code === "ShiftRight") setShifted(false);
		};
		const blur = () => {
			setPressed(/* @__PURE__ */ new Set());
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
	(0, import_react.useEffect)(() => {
		if (!errorFlash) return;
		const key = targetChar ? findKeyForChar(targetChar) : null;
		setWrongCodes(key ? [key.code] : []);
		const id = window.setTimeout(() => setWrongCodes([]), 180);
		return () => window.clearTimeout(id);
	}, [errorFlash, targetChar]);
	const highlight = targetChar ? new Set(codesForChar(targetChar)) : /* @__PURE__ */ new Set();
	const useShift = shifted || caps;
	function handleClick(key) {
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
		const ch = useShift ? key.shiftChar ?? key.char : key.char;
		if (ch && ch !== "	") {
			onType(ch);
			if (shifted) setShifted(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: "w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative origin-top-left",
			style: {
				width: DESIGN_WIDTH,
				transform: `scale(${scale})`,
				marginBottom: scale < 1 ? -(1 - scale) * 268 : 0
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "kb rounded-3xl bg-ice p-3 shadow-[var(--shadow-border)]",
				style: { gap: 6 },
				children: KEYBOARD_ROWS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "kb-row",
					style: { gap: 6 },
					children: row.map((key) => {
						const active = highlight.has(key.code);
						const isPressed = pressed.has(key.code);
						const isWrong = wrongCodes.includes(key.code);
						const isMod = key.kind === "mod";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							tabIndex: -1,
							"aria-label": key.label,
							onMouseDown: (event) => event.preventDefault(),
							onClick: () => handleClick(key),
							style: { flex: `${key.u} 1 0%` },
							className: cn("kb-key relative", isMod && "kb-key-mod", active && "kb-key-target", isPressed && "kb-key-pressed", isWrong && "kb-key-wrong"),
							children: [key.shiftLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex h-full flex-col items-start justify-between px-1.5 py-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs leading-none text-muted",
									children: key.shiftLabel
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold leading-none",
									children: key.label
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("px-1", key.u >= 2 && "text-xs font-semibold tracking-wide"),
								children: key.label
							}), key.home ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "kb-bump",
								"aria-hidden": "true"
							}) : null]
						}, key.code);
					})
				}, row[0]?.code))
			})
		})
	});
}
var ctx = null;
function audio() {
	if (typeof window === "undefined") return null;
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return null;
	if (!ctx) ctx = new AC();
	return ctx;
}
function beep(freq, duration, gainValue, type) {
	const ac = audio();
	if (!ac) return;
	ac.resume();
	const osc = ac.createOscillator();
	const gain = ac.createGain();
	osc.type = type;
	osc.frequency.value = freq;
	gain.gain.value = gainValue;
	gain.gain.exponentialRampToValueAtTime(1e-4, ac.currentTime + duration);
	osc.connect(gain);
	gain.connect(ac.destination);
	osc.start();
	osc.stop(ac.currentTime + duration);
}
function playCorrect(mute) {
	if (mute) return;
	beep(880, .04, .03, "sine");
}
function playError(mute) {
	if (mute) return;
	beep(220, .09, .05, "triangle");
}
function playDone(mute) {
	if (mute) return;
	beep(523, .08, .04, "sine");
	setTimeout(() => beep(784, .12, .04, "sine"), 90);
}
function readCustom() {
	if (typeof window === "undefined") return "";
	return window.sessionStorage.getItem("gomuoi.customText") ?? "";
}
function makeSession(lesson, mode) {
	const text = buildLessonText(lesson, lesson.id === "custom" ? readCustom() : void 0);
	if (!text) return null;
	return createSession(text, mode, lesson.durationMs ?? null);
}
function PracticeSession({ lessonId }) {
	const lesson = getLesson(lessonId);
	const [store, setStore] = (0, import_react.useState)(EMPTY_STATE);
	const [mode, setMode] = (0, import_react.useState)(lesson?.mode ?? "tutor");
	const [session, setSession] = (0, import_react.useState)(null);
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [focused, setFocused] = (0, import_react.useState)(true);
	const [flash, setFlash] = (0, import_react.useState)(0);
	const [seed, setSeed] = (0, import_react.useState)(0);
	const inputRef = (0, import_react.useRef)(null);
	const composing = (0, import_react.useRef)(false);
	const skipInput = (0, import_react.useRef)(false);
	const recorded = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		setStore(loadState());
	}, []);
	const restart = (0, import_react.useCallback)(() => {
		if (!lesson) return;
		recorded.current = false;
		setMode(lesson.mode);
		setSession(makeSession(lesson, lesson.mode));
		setFocused(true);
		window.setTimeout(() => inputRef.current?.focus(), 0);
	}, [lesson]);
	(0, import_react.useEffect)(() => {
		restart();
	}, [
		restart,
		seed,
		lessonId
	]);
	(0, import_react.useEffect)(() => {
		if (!session || session.finished || session.startedAt === null) return;
		const id = window.setInterval(() => {
			const t = Date.now();
			setNow(t);
			setSession((prev) => prev ? tick(prev, t) : prev);
		}, 100);
		return () => window.clearInterval(id);
	}, [
		session?.startedAt,
		session?.finished,
		session?.durationMs
	]);
	(0, import_react.useEffect)(() => {
		if (!session?.finished || recorded.current || !lesson) return;
		recorded.current = true;
		const stats = liveStats(session, Date.now());
		setStore(recordResult(lesson.id, stats.wpm, stats.accuracy));
		playDone(store.mute);
	}, [
		session,
		lesson,
		store.mute
	]);
	const applyChar = (0, import_react.useCallback)((char) => {
		setSession((prev) => {
			if (!prev) return prev;
			const next = typeChar(prev, char, Date.now());
			if (next.errors > prev.errors && next.caret === prev.caret) {
				playError(store.mute);
				setFlash((n) => n + 1);
			} else if (next.caret > prev.caret && next.marks[prev.caret] === "correct") playCorrect(store.mute);
			else if (next.errors > prev.errors) playError(store.mute);
			return next;
		});
	}, [store.mute]);
	const applyBackspace = (0, import_react.useCallback)(() => {
		setSession((prev) => prev ? typeBackspace(prev) : prev);
	}, []);
	const handleKeyEvent = (0, import_react.useCallback)((event) => {
		if (!session || session.finished) return false;
		if (("nativeEvent" in event ? event.nativeEvent : event).isComposing || event.key === "Process") return false;
		if (event.ctrlKey || event.metaKey || event.altKey) return false;
		if (event.key === "Tab") {
			event.preventDefault();
			return true;
		}
		if (event.key === "Backspace") {
			event.preventDefault();
			applyBackspace();
			return true;
		}
		if (event.key.length === 1) {
			event.preventDefault();
			applyChar(event.key);
			return true;
		}
		return false;
	}, [
		applyBackspace,
		applyChar,
		session
	]);
	(0, import_react.useEffect)(() => {
		const onKeyDown = (event) => {
			const target = event.target;
			if (target === inputRef.current) return;
			if (target) {
				const tag = target.tagName;
				if (tag === "INPUT" || tag === "TEXTAREA") return;
			}
			handleKeyEvent(event);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [handleKeyEvent]);
	const stats = (0, import_react.useMemo)(() => session ? liveStats(session, now) : null, [session, now]);
	const target = session ? expectedChar(session) : null;
	const finger = target ? fingerForChar(target) : null;
	if (!lesson) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg py-16 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl font-semibold",
			children: "Không tìm thấy bài"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				children: "Về trang chủ"
			})
		})]
	});
	if (lesson.id === "custom" && !session) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg py-16 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold",
				children: "Chưa có văn bản"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: "Dán một đoạn chữ ở trang chủ rồi bắt đầu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Soạn văn bản"
				})
			})
		]
	});
	if (session?.finished && stats) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsView, {
		title: lesson.title,
		stats,
		best: store.bestByLesson[lesson.id],
		nextId: nextLessonId(lesson.id),
		onRetry: () => setSeed((n) => n + 1)
	});
	if (!session || !stats) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-16 text-center text-muted",
		children: "Đang mở bài…"
	});
	const progress = session.durationMs && stats.remainingMs !== null ? 1 - stats.remainingMs / session.durationMs : session.target.length === 0 ? 0 : session.caret / session.target.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "Về trang chủ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-5" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-wide text-primary",
							children: lesson.group
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate font-display text-xl font-semibold text-ink",
							children: lesson.title
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-sm font-semibold tabular-nums text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [session.startedAt ? stats.wpm : "—", " WPM"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-key-muted",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [stats.accuracy, "%"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-key-muted",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: session.durationMs && stats.remainingMs !== null ? formatDuration(stats.remainingMs) : formatDuration(stats.elapsedMs) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeToggle, {
								value: mode,
								onChange: (next) => {
									setMode(next);
									recorded.current = false;
									setSession(makeSession(lesson, next));
									window.setTimeout(() => inputRef.current?.focus(), 0);
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "icon",
								"aria-label": store.mute ? "Bật âm" : "Tắt âm",
								onClick: () => setStore(setMute(!store.mute)),
								children: store.mute ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "secondary",
								size: "icon",
								"aria-label": "Làm lại",
								onClick: () => setSeed((n) => n + 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 overflow-hidden rounded-full bg-key-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full rounded-full bg-primary transition-[width] duration-[var(--motion-quick)] ease-[var(--ease-out)]",
					style: { width: `${Math.min(100, progress * 100)}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingPane, {
				session,
				focused,
				onFocus: () => setFocused(true),
				onBlur: () => setFocused(false),
				inputRef,
				onKeyDown: (event) => {
					handleKeyEvent(event);
					event.stopPropagation();
				},
				onInput: (event) => {
					if (composing.current || session.finished) return;
					if (skipInput.current) {
						skipInput.current = false;
						event.currentTarget.value = "";
						return;
					}
					const node = event.currentTarget;
					const value = node.value;
					node.value = "";
					for (const ch of value) applyChar(ch);
				},
				onCompositionStart: () => {
					composing.current = true;
				},
				onCompositionEnd: (event) => {
					composing.current = false;
					skipInput.current = true;
					const data = event.data ?? "";
					event.currentTarget.value = "";
					for (const ch of data) applyChar(ch);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerGuide, { active: finger }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualKeyboard, {
				targetChar: target,
				errorFlash: flash,
				onType: applyChar,
				onBackspace: applyBackspace
			})
		]
	});
}
function ModeToggle({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex rounded-2xl bg-surface p-1 shadow-[var(--shadow-border)]",
		children: [["tutor", "Gia sư"], ["speed", "Tốc độ"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(id),
			className: cn("h-9 rounded-xl px-3 text-sm font-medium transition-colors duration-[var(--motion-quick)]", value === id ? "bg-primary text-primary-foreground" : "text-muted hover:text-fg"),
			children: label
		}, id))
	});
}
function PracticePage() {
	const { id } = Route.useParams();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-5xl px-4 py-5 pb-10 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PracticeSession, { lessonId: id })
		})
	});
}
//#endregion
export { PracticePage as component };
