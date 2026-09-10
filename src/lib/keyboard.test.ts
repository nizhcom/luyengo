import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  KEYBOARD_ROWS,
  KEYBOARD_UNITS,
  codesForChar,
  rowUnits,
  shiftCodeForChar,
} from "./keyboard.ts";

describe("keyboard layout", () => {
  it("keeps every ANSI row at 15 units so gaps stay even", () => {
    for (const row of KEYBOARD_ROWS) {
      assert.equal(rowUnits(row), KEYBOARD_UNITS);
    }
  });

  it("includes the basic modifier keys", () => {
    const codes = new Set(KEYBOARD_ROWS.flat().map((key) => key.code));
    for (const code of [
      "Tab",
      "CapsLock",
      "Enter",
      "Backspace",
      "ShiftLeft",
      "ShiftRight",
      "ControlLeft",
      "ControlRight",
      "AltLeft",
      "AltRight",
      "Space",
      "MetaLeft",
    ]) {
      assert.equal(codes.has(code), true, `missing ${code}`);
    }
  });

  it("pairs capital letters with the opposite-hand shift", () => {
    assert.deepEqual(codesForChar("A"), ["KeyA", "ShiftRight"]);
    assert.deepEqual(codesForChar("P"), ["KeyP", "ShiftLeft"]);
    assert.equal(shiftCodeForChar("a"), null);
    assert.deepEqual(codesForChar(" "), ["Space"]);
  });
});
