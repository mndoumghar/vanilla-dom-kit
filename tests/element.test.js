import { describe, expect, it } from "vitest";
import { h } from "../src/element.js";

describe("h()", () => {
  it("creates an HTML element", () => {
    const element = h("div");

    expect(element.tagName).toBe("DIV");
  });

  it("applies className and attributes", () => {
    const element = h("button", {
      className: "primary",
      type: "button",
      disabled: true
    });

    expect(element.className).toBe("primary");
    expect(element.getAttribute("type")).toBe("button");
    expect(element.disabled).toBe(true);
  });

  it("supports dataset", () => {
    const element = h("div", {
      dataset: { userId: "42" }
    });

    expect(element.dataset.userId).toBe("42");
  });

  it("creates text using the text property", () => {
    const element = h("p", {
      text: "Hello JavaScript"
    });

    expect(element.textContent).toBe("Hello JavaScript");
  });
});
