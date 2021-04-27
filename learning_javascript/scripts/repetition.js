// For
for (let i = 100; i >= 0; i -= 10) {
    if ((i/10) % 2 != 0) {
        continue;   // Stop and go to the next step
    }
    if (i == 0) {
        break;  // Stop the repetition structure
    }
    console.log("For ... " + i);
}


// While
let i = 0;
while (i < 10) {
    console.log("While ... " + i);
    i++;
}


// For...of
let names = ["Caio", "Felps", "Ana"];
let myName = "Rayan";
for (let char of myName) {
    console.log(char);
}
for (let name of names) {
    console.log(name);
}


// For...in
let person = {
    name: "Rayan",
    age: 17,
    weight: 80.9
}
for (let property in person) {
    console.log(property);  // Show the property
    console.log(person[property])   // // Show the value of the property
}
