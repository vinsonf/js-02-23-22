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
    if (typeof value !== 'string') { // case they cancel
        return value;
    }
    if (isNaN(parseInt(value))){
        return checkForNumber(askUserForANumber()); // ask again
    }
    return parseInt(value); // return the number
}

// const firstNumber = checkForNumber(askUserForANumber(1));
// const secondNumber = checkForNumber(askUserForANumber(2));

// if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
//     alert(Math.max(firstNumber, secondNumber));
// } else {
//     alert("Sorry you didn't want to play")
// }


// reasons to have a function
// 1. you can reuse code
// 2. use functions to make your code more readable (name)
// 3. use it later




// function declaration vs expression

// function declaration example

// sayHello();
// sayHi();
const name = 'John';

function sayHello() {
    alert('hello');
}

const sayHi = function() { // function expression: assigned to a variable an anonymous function
    alert('hi');
}

const myArray = [1,2,3,4,5];
myArray.forEach( (number) => {
   
    console.log(number);
});
