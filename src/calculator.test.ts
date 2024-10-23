import { add } from "./calculator";
import { describe, it, expect } from "vitest";

describe("sample test", () => {
  it("returns true", () => {
    expect(add(1, 2)).toBe(3);
  });
});
