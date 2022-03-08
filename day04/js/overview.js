// variable declarations
// var, let, const
// var is function scoped 
// let is block scoped
// const is block scoped
// var [ declared, initialized, reassigned, redeclared ]

var a = 10; // declared, initialized
a = 20; // reassigned
var a = 'hello world'; // redeclared, initialized

b = 10; // var b; // declared, initialized

let c = 10; // let c; // declared, initialized
let d; // let d; // declared with no initialization

c = 20; // reassigned
d = 20; // reassigned

// let c = 'hello world'; wil cause an error of redeclaration

const USERNAME = 10; // const e; // declared, initialized
// USERNAME = 20;
//CONST EMAIL; // const EMAIL; // declared with no initialization will produce error

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;


// variable types
// primitive types
// string, number, boolean, null, undefined
// complex/compound types
// object, array

let username = 'john';
let score = 10;
let isValid = true;

let favoriteJSLearningUrls = ['youtube.com', 'codecademy.com', 'pluralsight.com', 'mdn.com', 'freecodecamp.com'];

let siblingsAges = [10, 20, 30, 40, 50];

let classesFavoriteFoods = [['pizza', 'sandwiches', 'salads'], ['burgers', 'chicken', 'pasta'], ['sushi', 'mexican', 'italian']];

let studentsFavoriteFoods = [{name: 'john', favoriteFood: 'pizza'}, {name: 'jane', favoriteFood: 'burgers'}, {name: 'joe', favoriteFood: 'sushi'}];

let objects = {
    name: 'john',
    age: 30,
    isValid: true,
    favoriteJSLearningUrls: ['youtube.com', 'codecademy.com', 'pluralsight.com', 'mdn.com', 'freecodecamp.com'],
    siblingsAges: [10, 20, 30, 40, 50],
    classMatesFavoriteFoods: [
        ['pizza'],
        [1, 2],
        [{name: 'john', favoriteFood: 'pizza'}, {name: 'jane', favoriteFood: 'burgers'}, {name: 'joe', favoriteFood: 'sushi'}]
    ],

};
console.log(objects.classMatesFavoriteFoods[2][0].favoriteFood)




