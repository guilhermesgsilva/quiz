import { useState } from "react";
import { QuestionState, Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./components/QuestionCard";

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  /* https://opentdb.com/api.php?amount=10 */
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const handleStart = () => {
    console.log(
      "🚀 ~ fetchQuizQuestions:",
      fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)
    );
  };

  const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const handleNext = () => {};

  return (
    <div>
      <h1>Quiz</h1>
      <button className="start" onClick={handleStart}>
        Start
      </button>
      <p className="score">Score:</p>
      <p className="score">Loading Questions ...</p>
      <QuestionCard
        question={questions[number]?.question}
        answers={questions[number]?.answers}
        callback={handleAnswer}
        userAnswer={userAnswers ? userAnswers[number]?.answer : undefined}
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      />
      <button className="next" onClick={handleNext}>
        Next Question
      </button>
    </div>
  );
}

export default App;
