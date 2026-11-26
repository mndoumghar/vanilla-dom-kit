import { describe, expect, it } from "vitest";
import { show, hide } from "../src/visibility.js";

describe("show()", () => {
  it("makes a hidden element visible", () => {
    const element = document.createElement("div");
    element.hidden = true;

    show(element);

    expect(element.hidden).toBe(false);
  });
});

describe("hide()", () => {
  it("hides an element", () => {
    const element = document.createElement("div");

    hide(element);

    expect(element.hidden).toBe(true);
  });
});
