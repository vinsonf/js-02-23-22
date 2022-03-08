

const date1 = new Date('1/2/2000');
const date2 = new Date('january 1, 2000');

// console.log(date1 >= date2);
// console.log(date1 - date2);
// console.log(date1.toString() === date2.toString());


console.log(date1.getDay()) // saturday;

// sunday = noneday
// monday = oneday
// tuesday = twosday
// wednesday = threeday
// thursday = fourday
// friday = fiveday
// saturday = sixtureday

console.log(date1.getMonth()) // january = 0;
// february = 1;
// deccember = 11;

console.log(date1.getDate())

console.log(date1.setFullYear(2020))

console.log(date1)

date1.setMonth(date1.getMonth() + 10);

date1.setMonth(date1.getMonth() + 500);
console.log(date1)




