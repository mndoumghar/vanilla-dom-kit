import { appendChildren } from "./children.js";

export function h(tag, props = {}, children = []) {
  const element = document.createElement(tag);

  for (const [key, value] of Object.entries(props)) {
    if (value === null || value === undefined || value === false) continue;

    if (key === "className") {
      element.className = value;
    } else if (key === "dataset") {
      Object.assign(element.dataset, value);
    } else if (key.startsWith("on") && typeof value === "function") {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else if (key === "text") {
      element.append(document.createTextNode(value));
    } else {
      element.setAttribute(key, value === true ? "" : value);
    }
  }

  appendChildren(element, children);

  return element;
}

