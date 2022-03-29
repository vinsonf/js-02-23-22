const bgColorInput = document.createElement('input');
bgColorInput.type = 'color';
const textColorInput = document.createElement('input');
textColorInput.type = 'color';
const bgColorLabel = document.createElement('label');
const textColorLabel = document.createElement('label');
bgColorLabel.innerText = 'Background color: ';
textColorLabel.innerText = 'Text color: ';

const bgColor = localStorage.getItem('bgColor');
const textColor = sessionStorage.getItem('textColor');

console.log(bgColor, textColor);

if (bgColor) {
    bgColorInput.value = bgColor;
    document.body.style.backgroundColor = bgColorInput.value;

}

if (textColor) {
    textColorInput.value = textColor;
    document.body.style.color = textColor;
}



document.body.append(bgColorLabel);
document.body.append(bgColorInput);

document.body.append(document.createElement('hr'));

document.body.append(textColorLabel);
document.body.append(textColorInput);


bgColorInput.addEventListener('input', () => {
    document.body.style.backgroundColor = bgColorInput.value;
    window.localStorage.setItem('bgColor', bgColorInput.value);
});

textColorInput.addEventListener('input', () => {
    document.body.style.color = textColorInput.value;
    window.sessionStorage.setItem('textColor', textColorInput.value);
});

const resetButton = document.createElement('button');
resetButton.innerText = 'Reset';

document.body.appendChild(document.createElement('hr'));
document.body.append(resetButton);

resetButton.addEventListener('click', () => {
   

    localStorage.removeItem('bgColor');
    sessionStorage.removeItem('textColor');


    bgColorInput.value = '#fff';
    textColorInput.value = '#000';
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = textColorInput.value;
})