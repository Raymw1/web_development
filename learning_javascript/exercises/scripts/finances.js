// OBJ with 2 properties arrays
//  incomes and expenses
// calculate the total of incomes and expenses, and the balance positive or negative followed the balance

let cash = {
    incomes: [50, 100, 200],
    expenses: [60, 120, 170]
}

function calculateCash(cash){   // It calculates the items in a array
    let total = 0;
    for (let value of cash) {
        total += value
    }
    return total;
}

function calculateTotal(cash) { // It calculates the balance of the family
    let incomes = calculateCash(cash.incomes);
    let expenses = calculateCash(cash.expenses);
    let balance = incomes - expenses;   // Calculating the balance
    let status;
    if (balance > 0) {  // Check if it is grater or lower
        status = "Positive";
    }   else if (balance < 0) {
        status = "Negative";
    }   else {
        status = "on the edge";
    }
    console.log(`Your current balance is $${balance.toFixed(2)} ! Your balance is ${status}!`);

}
calculateTotal(cash);


