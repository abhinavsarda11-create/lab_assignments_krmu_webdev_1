
const quizQuestions = [
    { question: "Who wrote 'Romeo and Juliet'?", answer: "william shakespeare" },

{ question: "What is the primary function of a CPU?", answer: "executes instructions" },

{ question: "Which data structure operates on a Last-In, First-Out (LIFO) principle?", answer: "stack" },

{ question: "How many sides does a hexagon have?", answer: "6" },

{ question: "What planet is known as the 'Red Planet'?", answer: "mars" }
];


function runQuiz() {

    
    let score = 0;

    
    for (let i = 0; i < quizQuestions.length; i++) {

        
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            
            alert("Correct!");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    
    alert(`Quiz Over! You scored ${score} out of ${quizQuestions.length}`);
}

runQuiz();
