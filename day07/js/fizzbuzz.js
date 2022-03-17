for (let i = 1; i <= 100; i++) {
    switch (i % 15) {
        case 0:
            console.log("FizzBuzz");
            break;
        case 3:
        case 6:
        case 9:
        case 12:
            console.log("Fizz");
            break;
        case 5:
        case 10:
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}
