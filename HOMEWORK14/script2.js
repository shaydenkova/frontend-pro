//1я задача

function arrayFill(x, y) {
    let array = [];
    for (i = 0; i < y; i++) {
        array.push(x);
    }
    return array;
}

let newArray = arrayFill ("uy", 6);
console.log(newArray);


//2я задача

function getSumOfArray(x) {
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            counter += x[i][j];
        }
    }
    return counter;
}

let arrayOfNumbers = [[3,5,6], [3,6], [6]];
let totalAmount = getSumOfArray(arrayOfNumbers);
console.log(totalAmount);

//2я задача

function getSumOfArray(x) {
    let counter = 0;
    for (let elem of x) {
        for (let element of elem) {
            counter += element;
        }
    }
    return counter;
}

let arrayOfNumbersTwo = [[3,5,6], [3,6], [6]];
let totalAmountTwo = getSumOfArray(arrayOfNumbersTwo);
console.log(totalAmountTwo);

//2я задача

function getSumOfArray(x) {
    let newArray = x.flat();
    let result = newArray.reduce((sum, item) => sum + item, 0);
    return result;
}

let arrayOfNumbersThree = [[3,5,6], [3,6], [6]];
let totalAmountThree = getSumOfArray(arrayOfNumbersThree);
console.log(totalAmountThree);