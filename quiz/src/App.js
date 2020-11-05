import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    questions,
    index,
    nextQuestion,
    checkAnswer,
    loading,
    correct,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];

  let answers = [...incorrect_answers];

  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers = [...incorrect_answers, correct_answer];
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correct}/ {index}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-area">
            {answers.map((item, index) => {
              return (
                <button
                  className="btn-answer"
                  key={index}
                  onClick={() => checkAnswer(correct_answer === item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </article>
        <button className="btn-next" onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  );
}

export default App;
