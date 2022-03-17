// loops

// condition and a way to exit the loop

console.log('---------------  Loops for increment ------------------');

console.log('while loop ---------------')
/*
    let i = 0; // initialization
    while(condition) {
        code block
        i++; // increment
    }
*/

let i = 0;
while(i < 5) {
    console.log(i);
    i++;

}
console.log('exit while loop', i);


console.log('do while loop ---------------')
/*
    let i = 0 : initialisation;
    do {
        code block
        i++; // increment
    } while(condition) 
*/

i = 0;
do {
    console.log(i);
    i++;
} while(i < 5);
console.log('exit do while loop', i);


console.log('for loop ---------------')

/*
    for(initialization; condition; increment) {
        code block
    }
    no global variables
*/
let j = 4;
for (let j = 0; j < 5; j++) {
    console.log(j);
}
console.log('exit for loop', j);


// loops

// condition and a way to exit the loop

console.log('---------------  Loops over an ORDERED (strings, arrays) collection ------------------');

console.log('while loop ---------------')
/*
    let i = 0; // initialization
    while(condition) {
        code block
        i++; // increment
    }
*/

let someString = 'hello world';
i = 0;
while(i < someString.length) {
    console.log(someString[i]);
    i++;
}
console.log('exit while loop', i);


console.log('do while loop ---------------')
/*
    let i = 0 : initialisation;
    do {
        code block
        i++; // increment
    } while(condition) 
*/

i = 0;
do {
    console.log(someString[i]);
    i++;
} while(i < someString.length);
console.log('exit do while loop', i);


console.log('for loop ---------------')

/*
    for(initialization; condition; increment) {
        code block
    }
    no global variables
*/
j = 4;
for (let j = 0; j < someString.length; j++) {
    console.log(someString[j]);
}
console.log('exit for loop', j);

let myArray = ['a', 'b', 'c', 'd', 'e'];

i = 0;
while(i < myArray.length) {
    console.log(myArray[i]);
    i++;
}
console.log('exit while loop', i);


console.log('do while loop ---------------')
/*
    let i = 0 : initialisation;
    do {
        code block
        i++; // increment
    } while(condition) 
*/

i = 0;
do {
    console.log(myArray[i]);
    i++;
} while(i < myArray.length);
console.log('exit do while loop', i);


console.log('for loop ---------------')

/*
    for(initialization; condition; increment) {
        code block
    }
    no global variables
*/
j = 4;
for (let j = 0; j < myArray.length; j++) {
    console.log(myArray[j]);
}
console.log('exit for loop', j);
console.log('--- build in array methods --- ');
console.log('forEach')

myArray.forEach(function(item, index, self) {
    console.log(item, index, self);
});
console.log('map')
const newArray = myArray.map(function(item, index, self) {
    console.log(item, index, self);
    return item + '!';
});

console.log(newArray);
console.log('----for of loop----');
for(let item of newArray) {
    console.log(item);
}
console.log('looping over unordered collections');
const person = {
    name: 'John',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
}
console.log('--- for in loop ---');
for(let key in person) {
    console.log(key);
    console.log(person[key]);
}





