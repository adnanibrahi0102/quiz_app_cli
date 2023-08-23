import readlineSync from 'readline-sync';
import chalk from 'chalk';
let userName = readlineSync.question(chalk.bgWhiteBright("What is Your Name:"));
console.log(chalk.green("Welcome " + userName + " Let's test your general knowledge.\n "));

let score = 0;

function quiz(userAnswer, answer) {
    let userInput = readlineSync.question(userAnswer);
    if (userInput.toLowerCase() === answer.toLowerCase()) {
        score = score + 1;
        console.log(chalk.yellow("Right answer!"));
    } else {
        score = score - 1;
        console.log(chalk.red("Wrong answer!"));
        console.log("right answer is :" + answer)
    }
}

let questions = [
    {
        question: chalk.bgMagentaBright("Which planet is known as the 'Red Planet'? "),
        answer: "mars",
    },
    {
        question: chalk.bgMagentaBright("What is the largest mammal in the world? "),
        answer: "blue whale",
    },
    {
        question: chalk.bgMagentaBright("What is the chemical symbol for gold? "),
        answer: "au",
    },
    {
        question: chalk.bgMagentaBright("Who wrote the play 'Romeo and Juliet'? "),
        answer: "william shakespeare",
    },
    {
        question: chalk.bgMagentaBright("What is the capital city of Japan? "),
        answer: "tokyo",
    },
    {
        question: chalk.bgMagentaBright("What is the symbol for the element hydrogen? "),
        answer: "h",
    },
    {
        question: chalk.bgMagentaBright("Which country is known as the Land of the Rising Sun? "),
        answer: "japan",
    },
    {
        question: chalk.bgMagentaBright("What is the largest planet in our solar system? "),
        answer: "jupiter",
    },
    {
        question: chalk.bgMagentaBright("What is the chemical symbol for oxygen? "),
        answer: "o",
    },
    {
        question: chalk.bgMagentaBright("Who painted the Mona Lisa? "),
        answer: "leonardo da vinci",
    },
    {
        question: chalk.bgMagentaBright("What is the largest ocean on Earth? "),
        answer: "pacific",
    },
    {
        question: chalk.bgMagentaBright("Who is known as the 'Father of Modern Physics'? "),
        answer: "albert einstein",
    },
    {
        question: chalk.bgMagentaBright("Which gas is responsible for the Earth's ozone layer? "),
        answer: "oxygen",
    },
    {
        question: chalk.bgMagentaBright("What is the tallest mountain in the world? "),
        answer: "mount everest",
    },
    {
        question: chalk.bgMagentaBright("Which famous scientist developed the theory of general relativity? "),
        answer: "albert einstein",
    }
];

for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
}

if (score > 0) {
    console.log(chalk.bgYellow("your score is : " + score));
    
}
if(score>=15){
    console.log(chalk.bgGreenBright("YAY...YOU WIN.."))
}