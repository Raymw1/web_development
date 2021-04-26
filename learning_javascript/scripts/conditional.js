//  If Else
let temperature = 37;
if (temperature > 37.5) {
    console.log("FEBRE!!!");
}   else if (temperature >= 37 && temperature <= 37.5) {
    console.log("POUCA FEBRE!");
}   else {
    console.log("SEM FEBRE!")
}


// Switch
let expression = "c";
switch (expression) {
    case "a":
        console.log("a");
        break
    case "b":
        console.log("b");
        break
    default:
        console.log("default");
        break
}


// Throw
function sayMyName(name) {
    if (name === "") {
        // throw new Error("No name")
        throw "Nome é obrigatório";
    }
    console.log("e")
}
// let myName = "";
// sayMyName(myName);

// Try...Catch
try {
    sayMyName("");
}   catch(e) {
    console.log(e);
}
