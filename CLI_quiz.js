const readlineSync=require('readline-sync')
let score=0;
let userName=readlineSync.question("What is Your Name: ")
console.log("Welcome  "  + userName + " Let'us Take a Simple Quiz")

function GeneralQuiz(userAnswer,answer,options){
    console.log(options)
    let userInput=readlineSync.question(userAnswer);
    if(userInput.toLowerCase()===answer.toLowerCase()){
        console.log("Correct Answer");
        score=score+1;

    }else{
        console.log("Incorrect Answer");
        console.log("correct answer is :" + answer)
        score=score-1;
    }
    console.log("your score is :" + score);
    if(score===10){
        console.log("-------------Congratulations You Win-------------")
    }
    

}


let worldCapitalsQuiz = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which city serves as the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo",
    },
    {
        question: "What is the capital of Australia?",
        options: ["Wellington", "Sydney", "Canberra", "Melbourne"],
        answer: "Canberra",
    },
    {
        question: "Which city is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"],
        answer: "Brasilia",
    },
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
        answer: "Ottawa",
    },
    {
        question: "Which city serves as the capital of South Africa?",
        options: ["Cape Town", "Pretoria", "Durban", "Johannesburg"],
        answer: "Pretoria",
    },
    {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Hong Kong", "Tokyo"],
        answer: "Beijing",
    },
    {
        question: "Which city is the capital of India?",
        options: ["Mumbai", "Bangalore", "New Delhi", "Kolkata"],
        answer: "New Delhi",
    },
    {
        question: "What is the capital of Russia?",
        options: ["St. Petersburg", "Moscow", "Kiev", "Minsk"],
        answer: "Moscow",
    },
    {
        question: "Which city serves as the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Luxor", "Giza"],
        answer: "Cairo",
    },
    
];


//Looping through array
for(let i=0;i<worldCapitalsQuiz.length;i++){
    let currentQuestion=worldCapitalsQuiz[i];
    GeneralQuiz(currentQuestion.question,currentQuestion.answer,currentQuestion.options);
    
}



