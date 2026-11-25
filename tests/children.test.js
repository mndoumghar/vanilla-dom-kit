import { describe, expect, it } from "vitest";
import {
  appendChildren,
  clear,
  setChildren
} from "../src/children.js";

describe("appendChildren()", () => {
  it("appends text and DOM elements", () => {
    const parent = document.createElement("div");
    const strong = document.createElement("strong");

    strong.textContent = "JavaScript";

    appendChildren(parent, [
      "Learn ",
      strong,
      " today"
    ]);

    expect(parent.textContent).toBe("Learn JavaScript today");
    expect(parent.children.length).toBe(1);
  });

  it("skips null, undefined and false", () => {
    const parent = document.createElement("div");

    appendChildren(parent, [
      "Hello",
      null,
      undefined,
      false
    ]);

    expect(parent.textContent).toBe("Hello");
  });
});

describe("clear()", () => {
  it("removes all children", () => {
    const parent = document.createElement("div");
    parent.append(document.createElement("p"));

    clear(parent);

    expect(parent.children.length).toBe(0);
    expect(parent.childNodes.length).toBe(0);
  });
});

describe("setChildren()", () => {
  it("replaces existing children", () => {
    const parent = document.createElement("div");

    parent.textContent = "Old content";

    setChildren(parent, [
      document.createElement("span"),
      "New content"
    ]);

    expect(parent.textContent).toBe("New content");
    expect(parent.children.length).toBe(1);
  });
});
