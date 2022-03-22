
class Eye {
    constructor(face, left) {
        this.eye = document.createElement('div');
        this.eye.style.width = '30px';
        this.eye.style.height = '30px';
        this.eye.style.backgroundColor = 'white';
        this.eye.style.borderRadius = '50%';
        this.eye.style.border = '1px solid black';
        this.eye.style.position = 'absolute';
        this.eye.style.top = '60px';
        this.eye.style.left = left;

        

        console.log('eye', this.eye);
        face.appendChild(this.eye);
        
    }

    blink() {
        this.eye.classList.add('blinking');
        setTimeout(() => {
            this.eye.classList.remove('blinking');
        }, 2000)
    }
}


class Face {
    constructor(body, color) {
       this.head = document.createElement('div');
        body.append(this.head);
        this.head.style.border = '1px solid black';
        this.head.style.height = '160px';
        this.head.style.width = '100px';
        this.head.style.borderRadius = '40%';
        this.head.style.position = 'absolute';
        this.head.style.left = '50px';
        this.head.style.top = '-50px';
        this.head.style.backgroundColor = color;
        this.leftEye = new Eye(this.head, '15px');
        this.rightEye = new Eye(this.head, '55px');
    }
}

class Dog {
    constructor(name, color, top) {
        this.name = name;
        
        this.body = document.createElement('div');
        this.face = new Face(this.body, color);
        document.body.append(this.body);
        this.body.style.border = '1px solid black';
        this.body.style.height = '300px';
        this.body.style.width = '200px';
        this.body.style.borderRadius = '20%';
        this.body.style.position = 'absolute';
        this.body.style.top = top;
        this.body.style.backgroundColor = color
    }

    blink() {
        this.face.leftEye.blink();
        this.face.rightEye.blink();
    }

    wink() {
        this.face.leftEye.blink();
    }
}

const dog = new Dog('Rover', 'Red', '100px');
const spot = new Dog('Spot', 'Yellow', '500px');

console.log(dog);

dog.blink();

setInterval(() => {
    Math.random() > .5 ? dog.blink() : dog.wink();
    Math.random() > .5 ? spot.blink() : spot.wink();
}, 5000)