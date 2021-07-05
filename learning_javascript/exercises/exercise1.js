{
    var varName;
    varName = "Raymw";
}
console.log(varName + ": " + typeof varName);

// let age = 17;
// let isHuman = true;
let age, isHuman;
age = 17;
isHuman = true;
// console.log(varName, age, isHuman);
// console.log(varName + " is " + age + " years old!");
console.log(`${varName} is ${age} years old!`);

const person = {
    name: varName,
    age: age,
    weight: 80,
    isAdmin: false
}
console.log(person);
console.log(`The person's weight is ${person.weight}kg!`);

let languages = [
    "English",
    "Portuguese",
    "French",
    "Spanish"
]
const chinese = "Chinese";
n_lang = languages.length;
languages[n_lang] = chinese;
console.log(`The third language is ${languages[2]}`);
console.log(`The number of languages available is ${languages.length}`);
