import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/persist-Jdvekm1U.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:bg-primary-hover",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:bg-ice",
			ghost: "bg-transparent text-fg hover:bg-ice",
			inverse: "bg-ink text-primary-foreground hover:bg-ink/90"
		},
		size: {
			sm: "h-9 rounded-xl px-3 text-sm",
			md: "h-11 rounded-2xl px-4 text-sm",
			lg: "h-12 rounded-2xl px-5 text-base",
			icon: "size-11 rounded-2xl"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var HOME_ROW = "asdf jkl; asdf jkl; fdsa ;lkj as df jk l; aaa sss ddd fff jjj kkk lll ;;; sad lad fall jak flask salad asks all dad fad lass hall; a sad lad asks; fall flask; all salads; jak had a flask";
var TOP_ROW = "qwer tyui op qwer tyui op poiuyt rewq qw er ty ui op quite type writer power query trip your witty pout; we type quiet poetry; you write pretty query reports";
var BOTTOM_ROW = "zxcv bnm zxcv bnm mnbvc xz cv bn m zzz xxx ccc vvv bbb nnn mmm zinc cave bomb man van cab; mix zinc; cab van; a calm cab man can mix zinc";
var NUMBERS = "1234 567 890 1234 567 890 0987 654 321 10 20 35 48 59 60 72 81 93 100 nam 2026; so 10 ngon; bai 12; phong 305";
var MIXED = "the quick brown fox jumps over the lazy dog. pack my box with five dozen liquor jugs. ten fingers rest on asdf jkl; then reach out.";
var EASY_WORDS = [
	"sad",
	"lad",
	"fall",
	"ask",
	"all",
	"dad",
	"hall",
	"flask",
	"salad",
	"as",
	"if",
	"in",
	"on",
	"an",
	"and",
	"the",
	"to",
	"go",
	"do",
	"so",
	"cat",
	"dog",
	"sun",
	"run",
	"red",
	"blue",
	"hand",
	"type",
	"key",
	"fast"
];
var VIET_NO_ACCENT = [
	"ban",
	"hoc",
	"tap",
	"go",
	"phim",
	"ngon",
	"tay",
	"nhanh",
	"dung",
	"cai",
	"nay",
	"kia",
	"mot",
	"hai",
	"ba",
	"bon",
	"nam",
	"sau",
	"bay",
	"tam",
	"chin",
	"muoi",
	"ngay",
	"thang",
	"gio",
	"phut",
	"viet",
	"doc",
	"lam",
	"viec",
	"nha",
	"cay",
	"troi",
	"nuoc",
	"sach",
	"chu",
	"cau",
	"van",
	"ban",
	"be",
	"lop",
	"truong",
	"bai",
	"luyen",
	"tap",
	"dung",
	"sai",
	"cham",
	"nhanh",
	"tot"
];
var VIET_ACCENT = [
	"bạn",
	"học",
	"tập",
	"gõ",
	"phím",
	"ngón",
	"tay",
	"nhanh",
	"đúng",
	"cái",
	"này",
	"kia",
	"một",
	"hai",
	"ba",
	"bốn",
	"năm",
	"sáu",
	"bảy",
	"tám",
	"chín",
	"mười",
	"ngày",
	"tháng",
	"giờ",
	"phút",
	"viết",
	"đọc",
	"làm",
	"việc",
	"nhà",
	"cây",
	"trời",
	"nước",
	"sách",
	"chữ",
	"câu",
	"văn",
	"bạn",
	"bè",
	"lớp",
	"trường",
	"bài",
	"luyện",
	"đúng",
	"sai",
	"chậm",
	"tốt",
	"xanh",
	"biển"
];
var SENTENCES_NO_ACCENT = [
	"Dat muoi ngon tay tren hang phim co so asdf va jkl.",
	"Ngon tro trai dung o phim F, ngon tro phai dung o phim J.",
	"Go nhe nhang, deu tay, khong nhin xuong ban phim.",
	"Moi ngay luyen vai phut se giup ban go nhanh va it sai hon.",
	"Khi gap chu in hoa, giu Shift bang ngon ut o tay kia.",
	"Dau cach dung ngon cai. Khong nen dung ngon tro de bam cach."
];
var SENTENCES_ACCENT = [
	"Đặt mười ngón tay trên hàng phím cơ sở asdf và jkl.",
	"Ngón trỏ trái đứng ở phím F, ngón trỏ phải đứng ở phím J.",
	"Gõ nhẹ nhàng, đều tay, không nhìn xuống bàn phím.",
	"Mỗi ngày luyện vài phút sẽ giúp bạn gõ nhanh và ít sai hơn.",
	"Khi gặp chữ in hoa, giữ Shift bằng ngón út ở tay kia.",
	"Dấu cách dùng ngón cái. Không nên dùng ngón trỏ để bấm cách."
];
var TIMED_POOL = [
	...EASY_WORDS,
	...VIET_NO_ACCENT,
	"time",
	"word",
	"line",
	"space",
	"shift",
	"enter",
	"light",
	"night",
	"water",
	"paper",
	"music",
	"green",
	"white",
	"black",
	"small",
	"great",
	"start",
	"finish",
	"people",
	"friend",
	"school",
	"letter",
	"number",
	"finger",
	"keyboard"
];
var LESSONS = [
	{
		id: "home",
		title: "Hàng giữa",
		blurb: "Đặt tay asdf jkl; — bài đầu tiên.",
		group: "Nền tảng",
		kind: "drill",
		mode: "tutor",
		text: HOME_ROW
	},
	{
		id: "top",
		title: "Hàng trên",
		blurb: "QWERTY — vươn ngón từ hàng giữa.",
		group: "Nền tảng",
		kind: "drill",
		mode: "tutor",
		text: TOP_ROW
	},
	{
		id: "bottom",
		title: "Hàng dưới",
		blurb: "ZXCV BNM — ngón út và ngón trỏ.",
		group: "Nền tảng",
		kind: "drill",
		mode: "tutor",
		text: BOTTOM_ROW
	},
	{
		id: "numbers",
		title: "Hàng số",
		blurb: "1234567890 và các dấu cơ bản.",
		group: "Nền tảng",
		kind: "drill",
		mode: "tutor",
		text: NUMBERS
	},
	{
		id: "mixed",
		title: "Cả bàn phím",
		blurb: "Trộn ba hàng chữ, vẫn chặn khi gõ sai.",
		group: "Nền tảng",
		kind: "drill",
		mode: "tutor",
		text: MIXED
	},
	{
		id: "words-en",
		title: "Từ dễ",
		blurb: "Từ tiếng Anh ngắn, nhịp đều.",
		group: "Từ và câu",
		kind: "words",
		mode: "tutor",
		words: EASY_WORDS
	},
	{
		id: "words-vi",
		title: "Từ tiếng Việt",
		blurb: "Không dấu, quen vị trí chữ Việt.",
		group: "Từ và câu",
		kind: "words",
		mode: "tutor",
		words: VIET_NO_ACCENT
	},
	{
		id: "words-accent",
		title: "Từ có dấu",
		blurb: "Dùng Telex hoặc VNI như khi chat.",
		group: "Từ và câu",
		kind: "words",
		mode: "speed",
		words: VIET_ACCENT
	},
	{
		id: "sentences",
		title: "Câu hoàn chỉnh",
		blurb: "Câu tiếng Việt không dấu, có dấu cách.",
		group: "Từ và câu",
		kind: "sentences",
		mode: "tutor",
		text: SENTENCES_NO_ACCENT.join(" ")
	},
	{
		id: "sentences-accent",
		title: "Câu có dấu",
		blurb: "Gõ dấu thanh bằng bộ gõ của bạn.",
		group: "Từ và câu",
		kind: "sentences",
		mode: "speed",
		text: SENTENCES_ACCENT.join(" ")
	},
	{
		id: "timed-30",
		title: "Tốc độ 30 giây",
		blurb: "Gõ liên tục, cho phép sai rồi đi tiếp.",
		group: "Thử thách",
		kind: "timed",
		mode: "speed",
		durationMs: 3e4,
		words: TIMED_POOL
	},
	{
		id: "timed-60",
		title: "Tốc độ 1 phút",
		blurb: "Bài đo WPM chuẩn.",
		group: "Thử thách",
		kind: "timed",
		mode: "speed",
		durationMs: 6e4,
		words: TIMED_POOL
	},
	{
		id: "timed-120",
		title: "Tốc độ 2 phút",
		blurb: "Giữ nhịp lâu, không nhìn phím.",
		group: "Thử thách",
		kind: "timed",
		mode: "speed",
		durationMs: 12e4,
		words: TIMED_POOL
	},
	{
		id: "custom",
		title: "Văn bản của bạn",
		blurb: "Dán đoạn bất kỳ rồi luyện.",
		group: "Tự soạn",
		kind: "custom",
		mode: "speed"
	}
];
var LESSON_GROUPS = [
	"Nền tảng",
	"Từ và câu",
	"Thử thách",
	"Tự soạn"
];
function getLesson(id) {
	return LESSONS.find((lesson) => lesson.id === id);
}
function nextLessonId(id) {
	const index = LESSONS.findIndex((lesson) => lesson.id === id);
	if (index < 0) return null;
	const next = LESSONS[index + 1];
	if (!next || next.id === "custom") return null;
	return next.id;
}
function pickWords(pool, count) {
	const out = [];
	for (let i = 0; i < count; i += 1) out.push(pool[i % pool.length] ?? "go");
	return out;
}
function shuffle(items) {
	const copy = items.slice();
	for (let i = copy.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = copy[i];
		const b = copy[j];
		if (a === void 0 || b === void 0) continue;
		copy[i] = b;
		copy[j] = a;
	}
	return copy;
}
function buildLessonText(lesson, customText) {
	if (lesson.kind === "custom") return (customText ?? "").replace(/\s+/g, " ").trim();
	if (lesson.kind === "timed" && lesson.words) return shuffle(pickWords(lesson.words, 160)).join(" ");
	if (lesson.words) return shuffle(pickWords(lesson.words, 48)).join(" ");
	return lesson.text ?? "";
}
var CUSTOM_TEXT_KEY = "gomuoi.customText";
var KEY = "gomuoi.v1";
var EMPTY_STATE = {
	mute: false,
	bestWpm: 0,
	bestByLesson: {},
	history: [],
	completed: []
};
function canUse() {
	return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}
function loadState() {
	if (!canUse()) return EMPTY_STATE;
	try {
		const raw = window.localStorage.getItem(KEY);
		if (!raw) return EMPTY_STATE;
		const parsed = JSON.parse(raw);
		return {
			mute: Boolean(parsed.mute),
			bestWpm: Number(parsed.bestWpm) || 0,
			bestByLesson: parsed.bestByLesson ?? {},
			history: Array.isArray(parsed.history) ? parsed.history.slice(0, 20) : [],
			completed: Array.isArray(parsed.completed) ? parsed.completed : []
		};
	} catch {
		return EMPTY_STATE;
	}
}
function saveState(state) {
	if (!canUse()) return;
	window.localStorage.setItem(KEY, JSON.stringify(state));
}
function recordResult(lessonId, wpm, accuracy) {
	const prev = loadState();
	const existing = prev.bestByLesson[lessonId];
	const bestForLesson = !existing || wpm > existing.wpm || wpm === existing.wpm && accuracy > existing.accuracy ? {
		wpm,
		accuracy
	} : existing;
	const next = {
		...prev,
		bestWpm: Math.max(prev.bestWpm, wpm),
		bestByLesson: {
			...prev.bestByLesson,
			[lessonId]: bestForLesson
		},
		history: [{
			lessonId,
			wpm,
			accuracy,
			at: Date.now()
		}, ...prev.history].slice(0, 20),
		completed: prev.completed.includes(lessonId) ? prev.completed : [...prev.completed, lessonId]
	};
	saveState(next);
	return next;
}
function setMute(mute) {
	const next = {
		...loadState(),
		mute
	};
	saveState(next);
	return next;
}
//#endregion
export { LESSON_GROUPS as a, getLesson as c, recordResult as d, setMute as f, LESSONS as i, loadState as l, CUSTOM_TEXT_KEY as n, buildLessonText as o, EMPTY_STATE as r, cn as s, Button as t, nextLessonId as u };
