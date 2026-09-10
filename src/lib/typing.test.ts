import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { createSession, liveStats, typeBackspace, typeChar } from "./typing.ts";

describe("typing session", () => {
  it("tutor mode blocks a wrong key and still counts the error", () => {
    let s = createSession("ab", "tutor");
    s = typeChar(s, "x", 1_000);
    assert.equal(s.caret, 0);
    assert.equal(s.errors, 1);
    assert.equal(s.marks[0], "pending");
    s = typeChar(s, "a", 1_100);
    assert.equal(s.caret, 1);
    assert.equal(s.marks[0], "correct");
  });

  it("speed mode advances on a mistake and allows backspace", () => {
    let s = createSession("ab", "speed");
    s = typeChar(s, "x", 1_000);
    assert.equal(s.caret, 1);
    assert.equal(s.marks[0], "wrong");
    s = typeBackspace(s);
    assert.equal(s.caret, 0);
    assert.equal(s.marks[0], "pending");
  });

  it("floors elapsed time at one second so tiny samples cannot inflate WPM", () => {
    let s = createSession("aaaaa", "speed");
    s = typeChar(s, "a", 0);
    s = typeChar(s, "a", 10);
    s = typeChar(s, "a", 20);
    s = typeChar(s, "a", 30);
    s = typeChar(s, "a", 40);
    const stats = liveStats(s, 40);
    assert.equal(stats.wpm, 60);
  });
});
