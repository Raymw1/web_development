//  New
let new_name = new String("Rayan");
new_name.surname = "Wilbert";
let new_age = new Number(17);
let new_date = new Date("2003-10-03");
// console.log(new_name, new_age, new_date);

// Typeof Delete
const person = {
    name: "Rayan",
    age: 17
}
delete person.age;
// console.log(typeof person.name);
// console.log(person);

// Operators
let mult = 5 * 5;
let div = 5 / 5;
let sum = 5 + 5;
let subt = 5 - 5;
let rem = 6 % 5;
let increment = ++sum;
let decrement = --rem;
let exp = 5 ** 5;
// console.log(mult, div, sum, subt, rem, increment, decrement, exp);


// Compare Operators
let equal = 5 == 5;
let diff = 5 != 5;
let tequal = 5 === "5";
let tdiff = 5 !== "5";
let greater = 6 >= 5;
let lower = 0 <= 1;
// console.log(equal, diff, tequal, tdiff, greater, lower);


// Logical Operators
let bread = true;
let cheese = false;
// console.log(bread && cheese);   // AND
// console.log(bread || cheese);   // OR
// console.log(!cheese)    // NOT


// Ternary Conditional Operator
let niceBreakfast = bread && !cheese ? "Top Coffee" : "Awful Coffee";
console.log(niceBreakfast);

