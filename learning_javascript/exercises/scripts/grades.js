//  g >= 90 - A
//  80  <= g < 90 - B
//  70  <= g < 80 - C
//  60  <= g < 70 - D
//  g < 60 - F

let grade = 100;
function checkGrade(grade) {
    if (grade > 100 || grade < 0) {
        console.log("Invalid grade. Please, try again!");
    }   else if (grade >= 90) {
        console.log("Grade A!");
    }   else if (80 <= grade) {
        console.log('Grade B!');
    }   else if (70 <= grade) {
        console.log('Grade C!');
    }   else if (60 <= grade) {
        console.log('Grade D!');
    }   else {
        console.log('Grade F!');
    }
}
checkGrade(grade);

