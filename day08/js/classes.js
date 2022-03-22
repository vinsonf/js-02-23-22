// javascript: objects
let name = 'james'


myObject = {
    name: "John",
    age: 30,
    isMarried: false,
    1: 'j', 
    '!na me': 'Peter',
    greet: greet
};

function greet() {
    const random = Math.random();
    this.name = 'Joe'
    console.log('hello, my name is ', this.name) 
}



class Person {
    name = 'james';
    age = 10;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello, my name is ', this.name + '!');
    }
    speak() {
        console.log('I am ', this.age, ' years old');
    }

}

class Employee extends Person {
    name = 'james';
    age = 10;

    enterBuilding() {
        console.log('enter the building');
    }
}

class Manager extends Employee {
    name = 'Pearl';
    age = 40;

    openTheSafe() {
        console.log('open the safe');
    }
}


const person = new Person('Joe', 20);
const person2 = new Person('John', 21);




const employee = new Employee();
const manager = new Manager();
manager.enterBuilding();
manager.greet();
manager.speak();
manager.openTheSafe();

console.log(manager);




