function createCalculator(x) {
    let counter = 0;
    return {
        sum:  function(i) {
            return counter = x + i;
        },
        mult: function(i) {
            return counter = counter * i;
        },
        sub: function(i) {
            return counter = counter - i;
        },
        div: function(i) {
            return counter = counter / i;
        },
        set: function(i) {
            return counter = i;
        }
    }
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));



