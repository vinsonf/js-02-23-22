export function create(type, text, parent) {
    const element = document.createElement(type);
    element.innerText = text;
    parent.append(element);
}