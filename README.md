# vanilla-dom-kit

A small set of DOM helpers for projects built with plain JavaScript.

It keeps a few common operations — creating elements, adding or replacing children, and toggling visibility — in one place. There is no component system or virtual DOM; the helpers work with regular browser DOM elements.

## What's included

- `h()` creates an HTML element and applies attributes, classes, datasets, event listeners, and text.
- `appendChildren()` adds one child or an array of children.
- `setChildren()` replaces an element's current contents.
- `clear()` removes all child nodes.
- `show()` and `hide()` toggle the element's `hidden` property.

## Usage

To use the current source, clone the repository:

```bash
git clone https://github.com/mndoumghar/vanilla-dom-kit.git
cd vanilla-dom-kit
npm install
```

Import the helpers from the source entry point:

```js
import {
  h,
  appendChildren,
  setChildren,
  clear,
  show,
  hide,
} from "./src/index.js";

const app = document.querySelector("#app");

const message = h("p", {
  className: "message",
  text: "Ready to go.",
});

const button = h(
  "button",
  {
    type: "button",
    onClick: () => {
      message.textContent = "Button clicked.";
    },
  },
  "Click me",
);

appendChildren(app, [message, button]);
```

The `h()` helper returns a regular DOM element, so you can keep using native properties and methods such as `textContent`, `classList`, and `addEventListener`.

## API

### `h(tag, props = {}, children = [])`

Creates an element with `document.createElement()`.

```js
const card = h(
  "article",
  {
    className: "card",
    dataset: { itemId: "42" },
    onClick: () => console.log("Card clicked"),
  },
  h("h2", { text: "A simple card" }),
);
```

Supported props:

| Prop | Behaviour |
| --- | --- |
| `className` | Sets the element's `className`. |
| `dataset` | Copies the provided values to `element.dataset`. |
| `onEvent` | Adds an event listener when the value is a function. For example, `onClick` or `onInput`. |
| `text` | Appends a text node. |
| Any other key | Sets an HTML attribute with that name. A value of `true` creates an empty attribute. |

Props with a value of `null`, `undefined`, or `false` are skipped. The optional `children` argument is appended after the text provided through the `text` prop.

### `appendChildren(parent, children)`

Appends one child or an array of children to `parent`.

- DOM nodes are appended as nodes.
- Other values are converted to text.
- `null`, `undefined`, and `false` are skipped.

```js
appendChildren(list, [
  h("li", { text: "First item" }),
  "Plain text",
  h("li", { text: "Second item" }),
]);
```

### `setChildren(element, children)`

Removes the current child nodes, then appends the new content.

```js
setChildren(list, [
  h("li", { text: "Updated item" }),
]);
```

### `clear(element)`

Removes every child node, including text nodes.

```js
clear(list);
```

### `show(element)` and `hide(element)`

Set the element's native `hidden` property to `false` or `true`.

```js
hide(message);
show(message);
```

## Development

Install the development dependencies and run the test suite:

```bash
npm install
npm test
```

Tests use Vitest and jsdom.

## Project structure

```text
src/
  index.js       Public exports
  element.js     Element creation
  children.js    Child management
  visibility.js  Visibility helpers
tests/
  element.test.js
  children.test.js
  visibility.test.js
```

The helpers expect a browser DOM, including `document` and `Node`.
