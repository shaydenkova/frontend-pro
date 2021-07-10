let values = document.querySelectorAll('[data-id="revenue-value"]');
let valuesAmounts = '';
for (let i of values) {
    valuesAmounts += i.innerHTML + ' ';
}

let valuesAmountsParsed = valuesAmounts.split(' ');
let sum = 0;

for (let i = 0; i < valuesAmountsParsed.length-1; i++) {
    if (valuesAmountsParsed[i].includes('B')) {
        valuesAmountsParsed[i] = valuesAmountsParsed[i].replace('B', '000000000');
        sum += +valuesAmountsParsed[i];
        
    } else if (valuesAmountsParsed[i].includes('M')) {
        valuesAmountsParsed[i] = valuesAmountsParsed[i].replace('M', '000000');
        sum += +valuesAmountsParsed[i];
    } else {
        valuesAmountsParsed[i] = valuesAmountsParsed[i];
        sum += +valuesAmountsParsed[i];
    }       
}

let totalAmount = document.querySelector('#summ').innerHTML;
totalAmount = totalAmount + " " + sum;
document.querySelector('#summ').innerHTML = totalAmount;


       
   