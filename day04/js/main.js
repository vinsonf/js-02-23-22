console.time('start')
const date = new Date();




// if (date.getHours() < 12) {
//     console.log('Good morning');
// }

if (date.getHours() >= 12 && date.getHours() < 18) {
    console.log('Good afternoon');
}

// if (date.getHours() > 18) {
//     console.log('Good evening');
// }

// const age = 18;
// const parentsPermission = true;
// if (age >= 18 || parentsPermission)  {
//     console.log('true');
// } else {
//     console.log('false');
// }

// if (date.getHours() <  10) {
//     console.log('Talk to me after coffee');
// }else if (date.getHours() < 12) {
//     console.log('good morning');
// } else if (date.getHours() < 18) {
//     console.log('good afternoon');
// } else if (date.getHours() < 22) {
//     console.log('good evening');
//     document.querySelector('.greeting').innerHTML = 'good evening';
//     document.querySelector('.greeting').classList.add('fadein')
// } else {
//     console.log('good night');
// }



const day = date.getDay();

switch(day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');

    case 2:
        console.log('Tuesday');
     
    case 3:
        console.log('Wednesday');
      
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
    default:
        console.log('Invalid day');
}

cardText = 'Q';

switch(cardText) {
    case 'A':
        console.log(11);
        break;
        case 'K':
        console.log(10);
        break;
        case 'Q':
        console.log(10);
        break;
        case 'J':
        console.log(10);
        default:
            console.log(+cardText);
}

if (true) {
    console.log('true');
} else {
    console.log('false');
}

cardText === 'A' ? 
console.log('true') :
console.log('false');


console.log(cardText);


console.timeEnd('start');