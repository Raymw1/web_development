const questions = [
    "What have I learnt today?",
    "What have bothered me?",
    "What could I do to improve?",
    "What have maked me happy today?",
    "How many people have I helped today?"
]

const ask = ( index = 0) => {
    process.stdout.write(questions[index] + ' > ')
}

ask()

let answers = []
process.stdin.on("data", data => {
    // process.stdout.write(data.toString().trim() + "\n");
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    }   else {
        // answers.forEach(answer => process.stdout.write(answer + "\n"));
        process.exit();
    }
})

process.on('exit', () => {
    for (let i in questions) {
        process.stdout.write(`${questions[i]}:\n${answers[i]}\n\n`);
    }
})