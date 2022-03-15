const orderPizzaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > .5 ? resolve('pizza is ordered') : reject('no one answered the phone');
        resolve('pizza is ordered');
    }, 2000);
});

orderPizzaPromise
.then(makePizza)
.then(deliverPizza)
.then(eatPizza)
.catch((error) => console.log(error));

function makePizza(result) {
    console.log(result);
    const chance = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chance > .5) {
                resolve('pizza is made');
            } else if (chance < .2) {
                reject('pizza is burnt');
            } else {
                reject('pizza is dropped');
            }
        }, 2000);
    }); 
}

function deliverPizza(result) {
    console.log(result);
    const chance = Math.random();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (chance > .5) {
                resolve('pizza is delivered');
            } else if (chance < .2) {
                reject('driver is lost');
            } else {
                reject('driver has a flat tire');
            }
        }, 2000);
    }); 
} 

function eatPizza(result) {
    console.log(result);
    console.log('pizza is eaten')
    return 'pizza is eaten';
}