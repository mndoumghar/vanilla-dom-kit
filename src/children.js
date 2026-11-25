export function appendChildren(parent, children) {
  
  const list = Array.isArray(children) ? children : [children];

  for (const child of list) {
    if (child === null || child === undefined || child === false) continue;

    parent.append(
      child instanceof Node
        ? child
        : document.createTextNode(String(child))
    );
  }
}

export function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function setChildren(element, children) {
  clear(element);
  appendChildren(element, children);
}
