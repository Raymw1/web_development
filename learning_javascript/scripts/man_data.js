//  Type Conversion or Coersion
let string = "15";
// console.log(Number(string) + 5);  // Str to Num
let num = 1844;
// console.log(`${String(num)} and LaLaLa`);   // Num to Str


// Length of strings and numbers
let word = "Paralelepípido";
// console.log(word.length);
// console.log(String(num).length);    // Length of a number


// Replace "." to ","
num = 2489.9909;
num = num.toFixed(2);    // Only 2 floats
num = num.replace(".", ",");    // Replacing
// console.log(num);


// Lower and upper
word = word.toUpperCase();
word = word.toLowerCase();
// console.log(word);


// Check a word in a text
let phrase = "I wanna Live";
// console.log(phrase.includes("live"));
// console.log(phrase.toLowerCase().includes("live"));


//  Manipulating Strings and Arrays
phrase = "I wanna live the Love!";
let myArray = phrase.split(" ");    // Putting words in an array
// console.log(myArray);
let phraseUnderscored = myArray.join("_")   // Creating a phrase using an array
// console.log(phraseUnderscored);


// Creating an array with constructor
let myNewArray = new Array("a", "b", "c");
// console.log(myNewArray);
myNewArray = new Array(10);
// console.log(myNewArray);


//  Counting the number of elements in an array
myNewArray = ["a",
{type: "array"},
function() {return "alo"},
]
// console.log(myNewArray.length);
// console.log(myNewArray[2]());


// Transform chars to array elements
// console.log(Array.from(word));


//  Manipulating Arrays
let techs = ["html", "css", "javascript"];
techs.push("python");    // Adding an element in the final
techs.unshift("c"); // Ading an element in the beginning
techs.pop(); // Removing the final element
techs.shift();  // Removing the beginning element
console.log(techs.slice(1, 3)); // Catching n element to m+1 element
techs.splice(1, 2)  // Removing n element to m element
techs.unshift("js");
let index = techs.indexOf("html");  // Find the position of an element
// console.log(index);
techs.splice(index - 1, index);
console.log(techs);

