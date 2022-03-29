const box = document.createElement('div');
box.classList.add('box');
document.body.append(box);

const block = document.createElement('div');
block.classList.add('block');
box.append(block);

const player = document.createElement('div');
player.classList.add('player');
box.append(player);

document.addEventListener('click',() => {
    player.classList.add('jumping');
    setTimeout(() => {
        player.classList.remove('jumping');
    }, 1000)
} );

let score = 0;
let hit = false;

setInterval(() => {
    const left = parseInt(getComputedStyle(block).left);
    const top = parseInt(getComputedStyle(player).top);
    if (left < 50 && left > 0) {
    
        if (top >= 200) {
            hit = true;
        }
    }
}, 10);


setInterval(() => {
    if (hit) {
        score--;
    } else {
        score++;
    }

    hit = false;
    console.log(score);

}, 2000);
