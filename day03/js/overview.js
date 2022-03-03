// datatypes: string, number, boolean, null, undefined, object, array


// primitives: string, number, boolean, null, undefined

// complex: object, array

const appName = 'Tip Calculator'; // string
let score = 0; // number
var isPresent = false; // boolean

// other primitives:
// null - no value
// undefined - no value

var selectedPerson;

console.log(selectedPerson);


// complex: orgainzation of data
// object
let person = {
    name: 'John',
    age: 30,
    isPresent: true,
}
// array
let people = [{ name: 'John', age: 30 , isPresent: true}, { name: 'Jane', age: 25, isPresent: false}, { name: 'Jack', age: 35, isPresent: true}, person];
console.log(people, person);


// operators defined in javascript
// + - * / % // return a number (try)
// == === != !== > < >= <= // returns boolean
// && || ! // returns boolean chain comparison
// assignment operator = // returns a value
// += -= *= /= %= // returns a value(number)

// addition
5 + 5;
let total = 5 + 5;
console.log(total);
total += 100;
console.log(total);

// subtraction
total -= 100;
console.log(total);

// multiplication
total *= 2;
console.log(total);

// division
total /= 5;
console.log(total);

// modulus
total %= 3;
console.log(total);

if (total === '1') {
    console.log('true');
}




