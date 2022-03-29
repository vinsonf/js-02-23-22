export default function create(type, text, parent) {
    const element = document.createElement(type);
    element.innerText = text;
    parent.append(element);
    return element;
}

export function update(element, text) {
    element.innerText = text;
}

export function addClass(element, className) {
    element.classList.add(className);
}