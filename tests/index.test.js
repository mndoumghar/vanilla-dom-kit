import { describe, expect, it } from "vitest";

import {
  h,
  appendChildren,
  clear,
  setChildren,
  show,
  hide
} from "../src/index.js";

describe("Public API", () => {
  it("exports all expected DOM utilities", () => {
    expect(h).toBeTypeOf("function");
    expect(appendChildren).toBeTypeOf("function");
    expect(clear).toBeTypeOf("function");
    expect(setChildren).toBeTypeOf("function");
    expect(show).toBeTypeOf("function");
    expect(hide).toBeTypeOf("function");
  });

  it("allows utilities to work together", () => {
    const container = h("div", {
      className: "container"
    });

    const title = h("h2", {}, "Vanilla DOM Kit");

    appendChildren(container, title);

    expect(container.textContent).toBe("Vanilla DOM Kit");

    hide(container);
    expect(container.hidden).toBe(true);

    show(container);
    expect(container.hidden).toBe(false);

    setChildren(container, [
      h("p", {}, "Public API works")
    ]);

    expect(container.textContent).toBe("Public API works");

    clear(container);
    expect(container.children.length).toBe(0);
  });
});
