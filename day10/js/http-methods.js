fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }, 
}).then(response => response.json()).then( data => {
    console.log(data);
})

fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }, 
    body: JSON.stringify({
        name: 'John',
        age: '30',
    })
}).then(response => response.json()).then( data => {
    console.log(data);
})

fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }, 
    body: JSON.stringify({
        name: 'John',
        age: '30',
    })
}).then(response => response.json()).then( data => {
    console.log(data);
});

fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }, 
    body: JSON.stringify({
        name: 'John',
        age: '30',
    })
}).then(response => response.json()).then( data => {
    console.log(data);
});

fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',

    }
}).then(response => response.json()).then( data => {
    console.log(data);
});