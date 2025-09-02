import React, { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText: "Which language is used for web apps?",
    answerOptions: [
      { answerText: "Python", isCorrect: false },
      { answerText: "Java", isCorrect: false },
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "C++", isCorrect: false },
    ],
  },
  {
    questionText: "What does CSS stand for?",
    answerOptions: [
      { answerText: "Cascading Style Sheets", isCorrect: true },
      { answerText: "Creative Style System", isCorrect: false },
      { answerText: "Computer Styled Syntax", isCorrect: false },
      { answerText: "Colorful Style Sheet", isCorrect: false },
    ],
  },
  {
    questionText: "React is mainly used for?",
    answerOptions: [
      { answerText: "Database management", isCorrect: false },
      { answerText: "User interface", isCorrect: true },
      { answerText: "Server-side scripting", isCorrect: false },
      { answerText: "Networking", isCorrect: false },
    ],
  },
  {
    questionText: "Which company developed React?",
    answerOptions: [
      { answerText: "Google", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Facebook", isCorrect: true },
      { answerText: "Twitter", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}
          </h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer.isCorrect)}
              >
                {answer.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
