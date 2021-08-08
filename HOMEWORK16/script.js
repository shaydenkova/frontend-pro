//1 задача

const personJohn = {
    name: "John",
    sayHello: function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const sysAdmin = {
    name: "Bob",
    __proto__: personJohn
  }
  
  const clientNatalia = {
    name: "Natalia",
    __proto__: personJohn
  }

sysAdmin.sayHello();
clientNatalia.sayHello();Ad


//2 задача

function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
function Employee(name) {
    this.name = name;
}
  
function Client(name) {
    this.name = name;
}
  
const personJohn = new Person("John");
const sysAdmin = new Employee("Bob");
sysAdmin.__proto__ = personJohn;
sysAdmin.sayHello();
const clientNatalia = new Client("Natalia");
clientNatalia.__proto__ = personJohn;
clientNatalia.sayHello();

//3 задача
 
function Student(name, markArray){
    this.name = name;
    this.markArray = markArray;
    this.averageMark = function() {
        let totalAmount = this.markArray.reduce((total, amount) => total + amount)/this.markArray.length; 
        return(Math.round(totalAmount))
      }
}

const students = [ 
    new Student('Student 1', [10,9,8,0,10]), // имя, оценки
    new Student('Student 12', [10,0,8,0,3,4])
];

students[0].averageMark();
students[1].averageMark();




