import { useState } from 'react';
import { quizQuestions, getQuizResult } from '../data/quiz';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getQuizResult(answers);
    return (
      <section className="quiz-section">
        <h2 className="section-title">Mini Quiz 🎯</h2>
        <div className="quiz-result">
          <h3 className="result-title">{result.title}</h3>
          <p className="result-description">{result.description}</p>
          <button onClick={reset} className="btn btn-secondary mt-4">
            Main Lagi
          </button>
        </div>
      </section>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <section className="quiz-section">
      <h2 className="section-title">Mini Quiz 🎯</h2>
      <div className="quiz-container">
        <div className="quiz-progress">
          Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
        </div>
        <h3 className="quiz-question">{question.question}</h3>
        <div className="quiz-options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="quiz-option"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
