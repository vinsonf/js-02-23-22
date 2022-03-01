const inputs = document.querySelectorAll('input');
function calculate() {
    // always convert to number when gathering data from inputs
    const total = +inputs[0].value;
    const percentage = +inputs[2].value;
    const partySize = +inputs[1].value;


    const tip = total / 100 * percentage;
    const grandTotal = total + tip;
    const perPerson = grandTotal / partySize;


    inputs[3].value = perPerson.toFixed(2);
}