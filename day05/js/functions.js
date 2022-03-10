// const firstNumber = parseInt(prompt('what is the first number?'));
// const secondNumber = parseInt(prompt('what is the second number?'));
// alert(Math.max(firstNumber, secondNumber));


function askUserForANumber(iteration) {
    switch(iteration) {
        case 1:
            return prompt('what is the first number?');
        case 2:
            return prompt('what is the second number?');
        default:
            return prompt('give me a valid number?');
    }
}

function checkForNumber(value) {
    if (typeof value !== 'string') {
        return value;
    }
    if (isNaN(parseInt(value))){
        return checkForNumber(askUserForANumber());
    }
    return parseInt(value);
}

const firstNumber = checkForNumber(askUserForANumber(1));
const secondNumber = checkForNumber(askUserForANumber(2));

if (firstNumber && secondNumber) {
    alert(Math.max(firstNumber, secondNumber));
} else {
    alert("Sorry you didn't want to play")
}

