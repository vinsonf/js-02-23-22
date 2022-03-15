// what is a callback?
// function that is passed into another function as an argument and is called back when the other function is finished


function orderAPizza(callback1, callback2, callback3) {
    
    console.log('pizza ordered');
    callback1(callback2, callback3);
}

function makePizza(callback2, callback3) {
    console.log('pizza is made');
    callback2(callback3);
}

function deliverPizza(callback3) {
    console.log('pizza is delivered');
    callback3();

}

function eatPizza() {
    console.log('pizza is eaten');

}

orderAPizza(makePizza, deliverPizza, eatPizza);



// what is a promise?