import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as Link, b as require_jsx_runtime, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Timer, l as ArrowRight, r as Trophy, s as Keyboard } from "../_libs/lucide-react.mjs";
import { a as LESSON_GROUPS, i as LESSONS, l as loadState, n as CUSTOM_TEXT_KEY, r as EMPTY_STATE, s as cn, t as Button } from "./persist-Jdvekm1U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B0yRw2v0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const [store, setStore] = (0, import_react.useState)(EMPTY_STATE);
	const navigate = useNavigate();
	const [custom, setCustom] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setStore(loadState());
	}, []);
	function startCustom() {
		const text = custom.replace(/\s+/g, " ").trim();
		if (text.length < 8) return;
		window.sessionStorage.setItem(CUSTOM_TEXT_KEY, text);
		navigate({
			to: "/practice/$id",
			params: { id: "custom" }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-surface p-7 shadow-[var(--shadow-border)] sm:p-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-primary",
						children: "Luyện gõ mười ngón"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-lg font-display text-4xl font-semibold tracking-tight text-ink text-balance sm:text-5xl",
						children: "Đặt tay đúng, gõ đều, nhanh lên từng ngày."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-pretty text-muted",
						children: "Bài ngắn theo hàng phím, từ, câu và thử thách tốc độ. Bàn phím trên màn hình sáng đúng phím và đúng ngón."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/practice/$id",
								params: { id: "home" },
								children: ["Bắt đầu hàng giữa", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							variant: "secondary",
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/practice/$id",
								params: { id: "timed-60" },
								children: "Đo 1 phút"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-3 lg:grid-cols-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						icon: Trophy,
						label: "Kỷ lục",
						value: store.bestWpm ? `${store.bestWpm} WPM` : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						icon: Keyboard,
						label: "Bài đã xong",
						value: String(store.completed.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroStat, {
						icon: Timer,
						label: "Lần gần nhất",
						value: store.history[0] ? `${store.history[0].wpm} WPM` : "—"
					})
				]
			})]
		}), LESSON_GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-semibold tracking-tight text-ink",
				children: group
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
				children: LESSONS.filter((lesson) => lesson.group === group).map((lesson) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonCard, {
					lesson,
					best: store.bestByLesson[lesson.id],
					done: store.completed.includes(lesson.id),
					custom,
					onCustomChange: setCustom,
					onStartCustom: startCustom
				}, lesson.id))
			})]
		}, group))]
	});
}
function HeroStat({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col justify-center rounded-3xl bg-surface px-4 py-4 shadow-[var(--shadow-border)] sm:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 text-primary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium uppercase tracking-wide",
				children: label
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 font-mono text-xl font-semibold tabular-nums text-ink sm:text-2xl",
			children: value
		})]
	});
}
function LessonCard({ lesson, best, done, custom, onCustomChange, onStartCustom }) {
	if (lesson.kind === "custom") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 rounded-3xl bg-surface p-5 shadow-[var(--shadow-border)] sm:col-span-2 xl:col-span-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg font-semibold text-ink",
				children: lesson.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted",
				children: lesson.blurb
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: custom,
				onChange: (event) => onCustomChange(event.target.value),
				placeholder: "Dán đoạn văn muốn luyện…",
				rows: 4,
				className: "w-full resize-y rounded-2xl border-0 bg-ice px-4 py-3 text-sm text-fg shadow-[var(--shadow-border)] outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-primary/40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onStartCustom,
				disabled: custom.trim().length < 8,
				children: ["Luyện đoạn này", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			}) })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/practice/$id",
		params: { id: lesson.id },
		className: cn("group flex flex-col rounded-3xl bg-surface p-5 shadow-[var(--shadow-border)]", "transition-[transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)]", "hover:-translate-y-0.5 hover:shadow-[var(--shadow-border-hover)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-semibold text-ink",
					children: lesson.title
				}), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-good/10 px-2 py-0.5 text-xs font-medium text-good",
					children: "Đã luyện"
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 flex-1 text-sm text-muted",
				children: lesson.blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex items-center justify-between text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-primary",
					children: best ? `${best.wpm} WPM` : lesson.mode === "tutor" ? "Gia sư" : "Tốc độ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 text-muted transition-transform duration-[var(--motion-quick)] group-hover:translate-x-0.5" })]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center rounded-2xl bg-primary font-display text-sm font-bold text-primary-foreground",
					children: "10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-lg font-semibold tracking-tight text-ink",
					children: "GõMười"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden text-sm text-muted sm:block",
				children: "Gõ bằng mười ngón, không nhìn phím."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {})
		})]
	});
}
//#endregion
export { Home as component };
