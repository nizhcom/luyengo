import type { Mode } from "./typing";

export type LessonKind = "drill" | "words" | "sentences" | "timed" | "custom";

export type Lesson = {
  id: string;
  title: string;
  blurb: string;
  group: string;
  kind: LessonKind;
  mode: Mode;
  durationMs?: number;
  text?: string;
  words?: string[];
};

const HOME_ROW =
  "asdf jkl; asdf jkl; fdsa ;lkj as df jk l; aaa sss ddd fff jjj kkk lll ;;; " +
  "sad lad fall jak flask salad asks all dad fad lass hall; " +
  "a sad lad asks; fall flask; all salads; jak had a flask";

const TOP_ROW =
  "qwer tyui op qwer tyui op poiuyt rewq qw er ty ui op " +
  "quite type writer power query trip your witty pout; " +
  "we type quiet poetry; you write pretty query reports";

const BOTTOM_ROW =
  "zxcv bnm zxcv bnm mnbvc xz cv bn m zzz xxx ccc vvv bbb nnn mmm " +
  "zinc cave bomb man van cab; mix zinc; cab van; " +
  "a calm cab man can mix zinc";

const NUMBERS =
  "1234 567 890 1234 567 890 0987 654 321 " +
  "10 20 35 48 59 60 72 81 93 100 " +
  "nam 2026; so 10 ngon; bai 12; phong 305";

const MIXED =
  "the quick brown fox jumps over the lazy dog. " +
  "pack my box with five dozen liquor jugs. " +
  "ten fingers rest on asdf jkl; then reach out.";

const EASY_WORDS = [
  "sad", "lad", "fall", "ask", "all", "dad", "hall", "flask", "salad", "as",
  "if", "in", "on", "an", "and", "the", "to", "go", "do", "so",
  "cat", "dog", "sun", "run", "red", "blue", "hand", "type", "key", "fast",
];

const VIET_NO_ACCENT = [
  "ban", "hoc", "tap", "go", "phim", "ngon", "tay", "nhanh", "dung", "cai",
  "nay", "kia", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam",
  "chin", "muoi", "ngay", "thang", "gio", "phut", "viet", "doc", "lam", "viec",
  "nha", "cay", "troi", "nuoc", "sach", "chu", "cau", "van", "ban", "be",
  "lop", "truong", "bai", "luyen", "tap", "dung", "sai", "cham", "nhanh", "tot",
];

const VIET_ACCENT = [
  "bạn", "học", "tập", "gõ", "phím", "ngón", "tay", "nhanh", "đúng", "cái",
  "này", "kia", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám",
  "chín", "mười", "ngày", "tháng", "giờ", "phút", "viết", "đọc", "làm", "việc",
  "nhà", "cây", "trời", "nước", "sách", "chữ", "câu", "văn", "bạn", "bè",
  "lớp", "trường", "bài", "luyện", "đúng", "sai", "chậm", "tốt", "xanh", "biển",
];

const SENTENCES_NO_ACCENT = [
  "Dat muoi ngon tay tren hang phim co so asdf va jkl.",
  "Ngon tro trai dung o phim F, ngon tro phai dung o phim J.",
  "Go nhe nhang, deu tay, khong nhin xuong ban phim.",
  "Moi ngay luyen vai phut se giup ban go nhanh va it sai hon.",
  "Khi gap chu in hoa, giu Shift bang ngon ut o tay kia.",
  "Dau cach dung ngon cai. Khong nen dung ngon tro de bam cach.",
];

const SENTENCES_ACCENT = [
  "Đặt mười ngón tay trên hàng phím cơ sở asdf và jkl.",
  "Ngón trỏ trái đứng ở phím F, ngón trỏ phải đứng ở phím J.",
  "Gõ nhẹ nhàng, đều tay, không nhìn xuống bàn phím.",
  "Mỗi ngày luyện vài phút sẽ giúp bạn gõ nhanh và ít sai hơn.",
  "Khi gặp chữ in hoa, giữ Shift bằng ngón út ở tay kia.",
  "Dấu cách dùng ngón cái. Không nên dùng ngón trỏ để bấm cách.",
];

const TIMED_POOL = [
  ...EASY_WORDS,
  ...VIET_NO_ACCENT,
  "time", "word", "line", "space", "shift", "enter", "light", "night", "water",
  "paper", "music", "green", "white", "black", "small", "great", "start", "finish",
  "people", "friend", "school", "letter", "number", "finger", "keyboard",
];

export const LESSONS: Lesson[] = [
  {
    id: "home",
    title: "Hàng giữa",
    blurb: "Đặt tay asdf jkl; — bài đầu tiên.",
    group: "Nền tảng",
    kind: "drill",
    mode: "tutor",
    text: HOME_ROW,
  },
  {
    id: "top",
    title: "Hàng trên",
    blurb: "QWERTY — vươn ngón từ hàng giữa.",
    group: "Nền tảng",
    kind: "drill",
    mode: "tutor",
    text: TOP_ROW,
  },
  {
    id: "bottom",
    title: "Hàng dưới",
    blurb: "ZXCV BNM — ngón út và ngón trỏ.",
    group: "Nền tảng",
    kind: "drill",
    mode: "tutor",
    text: BOTTOM_ROW,
  },
  {
    id: "numbers",
    title: "Hàng số",
    blurb: "1234567890 và các dấu cơ bản.",
    group: "Nền tảng",
    kind: "drill",
    mode: "tutor",
    text: NUMBERS,
  },
  {
    id: "mixed",
    title: "Cả bàn phím",
    blurb: "Trộn ba hàng chữ, vẫn chặn khi gõ sai.",
    group: "Nền tảng",
    kind: "drill",
    mode: "tutor",
    text: MIXED,
  },
  {
    id: "words-en",
    title: "Từ dễ",
    blurb: "Từ tiếng Anh ngắn, nhịp đều.",
    group: "Từ và câu",
    kind: "words",
    mode: "tutor",
    words: EASY_WORDS,
  },
  {
    id: "words-vi",
    title: "Từ tiếng Việt",
    blurb: "Không dấu, quen vị trí chữ Việt.",
    group: "Từ và câu",
    kind: "words",
    mode: "tutor",
    words: VIET_NO_ACCENT,
  },
  {
    id: "words-accent",
    title: "Từ có dấu",
    blurb: "Dùng Telex hoặc VNI như khi chat.",
    group: "Từ và câu",
    kind: "words",
    mode: "speed",
    words: VIET_ACCENT,
  },
  {
    id: "sentences",
    title: "Câu hoàn chỉnh",
    blurb: "Câu tiếng Việt không dấu, có dấu cách.",
    group: "Từ và câu",
    kind: "sentences",
    mode: "tutor",
    text: SENTENCES_NO_ACCENT.join(" "),
  },
  {
    id: "sentences-accent",
    title: "Câu có dấu",
    blurb: "Gõ dấu thanh bằng bộ gõ của bạn.",
    group: "Từ và câu",
    kind: "sentences",
    mode: "speed",
    text: SENTENCES_ACCENT.join(" "),
  },
  {
    id: "timed-30",
    title: "Tốc độ 30 giây",
    blurb: "Gõ liên tục, cho phép sai rồi đi tiếp.",
    group: "Thử thách",
    kind: "timed",
    mode: "speed",
    durationMs: 30_000,
    words: TIMED_POOL,
  },
  {
    id: "timed-60",
    title: "Tốc độ 1 phút",
    blurb: "Bài đo WPM chuẩn.",
    group: "Thử thách",
    kind: "timed",
    mode: "speed",
    durationMs: 60_000,
    words: TIMED_POOL,
  },
  {
    id: "timed-120",
    title: "Tốc độ 2 phút",
    blurb: "Giữ nhịp lâu, không nhìn phím.",
    group: "Thử thách",
    kind: "timed",
    mode: "speed",
    durationMs: 120_000,
    words: TIMED_POOL,
  },
  {
    id: "custom",
    title: "Văn bản của bạn",
    blurb: "Dán đoạn bất kỳ rồi luyện.",
    group: "Tự soạn",
    kind: "custom",
    mode: "speed",
  },
];

export const LESSON_GROUPS = ["Nền tảng", "Từ và câu", "Thử thách", "Tự soạn"] as const;

export function getLesson(id: string): Lesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function nextLessonId(id: string): string | null {
  const index = LESSONS.findIndex((lesson) => lesson.id === id);
  if (index < 0) return null;
  const next = LESSONS[index + 1];
  if (!next || next.id === "custom") return null;
  return next.id;
}

function pickWords(pool: string[], count: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i += 1) {
    out.push(pool[i % pool.length] ?? "go");
  }
  return out;
}

function shuffle<T>(items: T[]): T[] {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = copy[i];
    const b = copy[j];
    if (a === undefined || b === undefined) continue;
    copy[i] = b;
    copy[j] = a;
  }
  return copy;
}

export function buildLessonText(lesson: Lesson, customText?: string): string {
  if (lesson.kind === "custom") {
    return (customText ?? "").replace(/\s+/g, " ").trim();
  }
  if (lesson.kind === "timed" && lesson.words) {
    return shuffle(pickWords(lesson.words, 160)).join(" ");
  }
  if (lesson.words) {
    return shuffle(pickWords(lesson.words, 48)).join(" ");
  }
  return lesson.text ?? "";
}

export const CUSTOM_TEXT_KEY = "gomuoi.customText";
