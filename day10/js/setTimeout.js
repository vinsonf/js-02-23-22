const h1 = document.createElement('h1');
h1.innerText = 'Welcome to my page!';
const p = document.createElement('p');
p.innerText = 'This is a paragraph';

p.classList.add('invisible');

document.body.append(h1, p);

setTimeout(function() {
    console.log("Hello");
}, 5_000);
setTimeout(function() {
    console.log("World");
}, 10_000);


const addUserButton = document.createElement('button');
addUserButton.innerText = 'Add user';
document.body.append(addUserButton);

const myFunction = () => {
    console.log('Add user button clicked 1');
    fetch('http://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({name: 'John', age: '30'}),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
};

addUserButton.addEventListener('click', myFunction );

addUserButton.removeEventListener('click', myFunction );

addUserButton.addEventListener('click', () => {
    console.log('Add user button clicked 2');
    fetch('http://jsonplaceholder.typicode.com/users/1', {
        method: 'PATCH',
        body: JSON.stringify({name: 'John', age: '30'}),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        p.innerText = 'User was updated successfully';
        p.classList.remove('invisible');
        p.classList.add('visible');

        setTimeout(function() {
            p.classList.add('invisible');
            p.classList.remove('visible');
            p.innerText = 'This is a paragraph';
        }, 4000);
    });
});