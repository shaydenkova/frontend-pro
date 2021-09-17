//1 задача
const countTotal = value => ({total: value});
countTotal(100);

//2 задача
let date = new Date;
const result = `Today is ${date.toLocaleDateString()}`;
console.log(result);

//3 задача
let a = 2;
let b = 3;
[a,b] = [b,a];

console.log (a);
console.log (b);