// what is scope
// scope is the area in which variables are accessible

let x = 1;
let z = 6;
function countToFive(startingPoint = 0) {
    let x = startingPoint;
    while(x < z) {  
        console.log(x);
        x++;
    }
}
// countToFive(1);

// countToFive(2);

// countToFive(3);

// global scope
// let a = 1;
// let b = 1;
// let c = 1;
// function scope() {
//     // local scope
//     let a = 2;
//     let b = 2;
//     console.log(a); //  2
//     function child() {
//         // local scope
//         let a = 3;
//         console.log(a); // 3
//         console.log(b); // 2 look up in scope tree
//         console.log(c); // 1 look up in global scope tree
//     }
// }


// function scope vs block scope

function functionVSBlock() {
    let a = 1;

    if (a === 1) {
        var b = 2;
        let c = 2;
    }

    console.log(b); // 2 (function scope)
    console.log(c); // undefined (let and const block scope)
}

function closureScope() {

    // child scopes ability to remember the parent scope
    let a = 1;

    function child() {
        let b = 2;
        console.log(a); // 1
        console.log(b); // 2
    }

    child();
    
}

function createCounter() {
    let count = 0;

    return {
        a: 10,
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        },
        logA() {
            console.log(this.a);
            this.increment();
        }
    }
    
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();
myCounter.logA();

