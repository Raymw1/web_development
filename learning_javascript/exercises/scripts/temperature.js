let temp = "1f";
function tranformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");
    if ((!celsiusExists && !fahrenheitExists) || (celsiusExists && fahrenheitExists)) {
        throw new Error("Degree undefined!");
    }
    // F -> C
    let formula;
    let updatedDegree;
    let degreeSign;
    if (fahrenheitExists) {
        updatedDegree = Number(degree.toUpperCase().replace("F", ""));
        formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
        degreeSign = "C";
    }   else if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = "F";
    }
    return formula(updatedDegree) + degreeSign;
}
try {
    console.log(tranformDegree(temp));
}   catch (error) {
    console.log(error.message)
}

