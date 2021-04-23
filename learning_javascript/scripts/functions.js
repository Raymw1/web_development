// Motivation phrases

// function statement
function createPhrases() {
    console.log("Study is very exciting!");
    console.log("Patience and consistence!");
    console.log("Reviewing is the mother of the learnt!");
}
// createPhrases()


// Function Expression  /   Function anonymous
//                                 parameters
const sum = function(a, b) {
    // console.log(a + b);
    return a + b;
}
//      arguments
let num1 = 34;
let num2 = 6;
// sum(num1, num2);
const value = sum(num1, num2);
// console.log(`${num1} + ${num2} = ${value}`);


// Function Scope
let subject = "Simple phrase";
function createThink(subject) {
    subject = "I'm using a paremeter";
    return subject;
}
// console.log(subject);
// console.log(createThink(subject));


// Function hoisting
// sayMyName();
function sayMyName() {
    console.log("Raymw")
}


// Arrow Function
const myArrowFunction = () => {
    console.log("My first arrow function!");
}
// myArrowFunction();


// Callback function

function myCallback(cb) {
    // console.log(cb);
    cb();
}
// myCallback(
//     () => {
//         console.log("I'm in a Callback");
//     }
// );


// Function Contructor
function myConstructor(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " is Walking"
    }
}
let newName = new myConstructor("Raymw");
newName1 = new myConstructor("Caio");
newName2 = new myConstructor("Ana");
console.log(newName);
console.log(newName1.walk());
console.log(newName2);

