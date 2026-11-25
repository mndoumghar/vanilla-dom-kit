import { describe, expect, it, vi } from "vitest";
import { h } from "../src/element.js";

describe("Event handling", () => {
  it("registers and executes click handlers", () => {
    const handleClick = vi.fn();

    const button = h("button", {
      onClick: handleClick
    }, "Click me");

    button.dispatchEvent(new MouseEvent("click"));

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("registers the correct event type", () => {
    const handleMouseEnter = vi.fn();

    const element = h("div", {
      onMouseEnter: handleMouseEnter
    });

    element.dispatchEvent(new MouseEvent("mouseenter"));

    expect(handleMouseEnter).toHaveBeenCalledOnce();
  });
});
