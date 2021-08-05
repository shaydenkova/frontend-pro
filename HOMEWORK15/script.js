const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function() {return this.firstName + ' ' + this.secondName},
};

console.log(user.getFullName());

const userTwo = {
    firstName: "Steve",
    secondName: "Jobs"
}

console.log(user.getFullName.call(userTwo));

const userThree = {
    firstName: "Steve",
    secondName: "Wozniak "
}

console.log(user.getFullName.apply(userThree));

const userFour = {
    firstName: "Julia",
    secondName: "Roberts"
}


let item = user.getFullName.bind(userFour);
console.log(item());

function NewUser(x,y) {
    this.firstName = x;
    this.secondName = y;
}

let makeObj = new NewUser("Taniya", "Ivanova");
console.log(makeObj);

let makeObjTwo = new NewUser("Inna", "Petrova");
console.log(makeObjTwo);

let makeObjThree = new NewUser("Marina", "Petrova");
console.log(makeObjThree);

function Calculator(i) {
    this.sum = function(x) {
        this.sum.value = i + x;
        return this.sum.value}
    this.mult = function(x) {
        this.mult.value = this.sum.value * x;
        return this.mult.value};
    this.sub = function(x) {
        this.sub.value = this.mult.value - x;
        return this.sub.value};
    this.div = function(x) {
        this.div.value = this.sub.value / x;
        return this.div.value};
    this.set = function(x) {return x};
}

const calc = new Calculator(10);
console.log(calc.sum(5));
console.log(calc.mult(10)); 
console.log(calc.sub(40)); 
console.log(calc.div(10)); 
console.log(calc.set(100)); 




