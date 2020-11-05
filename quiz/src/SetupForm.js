import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>setup quiz</h2>

          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-input"
              min={1}
              max={100}
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              id="category"
              name="category"
              value={quiz.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="myhtology">myhtology</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
              className="form-input"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>

          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
