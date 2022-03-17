// what is the DOM?

// DOCUMENT OBJECT MODEL
// The DOM is a tree of nodes that represents the structure of the document.

const element = {
    localName: 'H1',
    children: [], // elements
    classList: {
        add: function () {},
        remove: function () {}
    },
    dataset: {
        get: function () {},
    },
    style: {
        color: 'red',
        padding: '10px',
        display: 'block'
    },
    append: function(child) {},
    appendChild: function(child) {},
    prepend: function(child) {},
    querySelector: function(selector) {},
    querySelectorAll: function(selector) {},
};

// DOM elements are objects
// DOM elements have properties
// DOM elements have methods

// DOM elements have a localName property

// DOM elements have a children property
// The children property is an array of DOM elements


// DOM elements have a classList property
// The classList property is an object

// C.R.U.D. (Create, Read, Update, Delete)

// create
const myElement = document.createElement('ul');
document.querySelector('body').prepend(myElement);

const myElement2 = document.createElement('li');
myElement.append(myElement2);
myElement2.innerText = 'Hello';
myElement2.textContent = 'Hello2';
myElement2.innerHTML = 'Hello3';

const myElement3 = document.createElement('h3');
myElement2.append(myElement3);
myElement3.innerText = 'Hello4';

// style
myElement2.style.color = 'red';
myElement3.style.color = 'green';

// classList
myElement2.classList.add('my-class');
myElement2.classList.remove('my-class');

// remove
myElement3.remove();


document.querySelector('h1').append(myElement3);
myElement.append(myElement3);


for (let i = 1; i <= 100; i++) {
    const li = document.createElement('li');
    myElement.append(li);
    switch (i % 15) {
        case 0:
            console.log("FizzBuzz");
            li.innerText = "FizzBuzz";
            break;
        case 3:
        case 6:
        case 9:
        case 12:
            console.log("Fizz");
            li.innerText = "Fizz";
            break;
        case 5:
        case 10:
            console.log("Buzz");
            li.innerText = "Buzz";
            break;
        default:
            console.log(i);
            li.innerText = i;
    }
}