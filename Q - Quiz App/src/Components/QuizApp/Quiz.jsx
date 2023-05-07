import React, { useEffect, useState } from "react";
import "./Quiz.css";
import QuestionsList from "../Data";

function Quiz() {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [response, setResponse] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);

  useEffect(() => {
    const listOfData = QuestionsList();
    setData(listOfData);
  }, []);

  const nextButtonHandler = () => {

    if (response === "") {
      alert("Please select an answer!");
      return;
    }
    
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setResponse("");
      setDisabled(false);
    } else {
      setShowResults(true);
    }
  };

  const answerSelectHandler = (answer) => {
    if (answer === data[currentQuestion].correctAnswer) {
      setResponse("Correct Answer");
      setDisabled(false);
      setNumCorrectAnswers(numCorrectAnswers + 1);
    } else {
      setResponse("Wrong Answer");
      setDisabled(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setResponse("");
    setDisabled(false);
    setShowResults(false);
    setNumCorrectAnswers(0);
  };

  const renderQuiz = () => (
    data.length > 0 && data[currentQuestion] && (
      <div key={data[currentQuestion].id} className="box">
      <h3>{data[currentQuestion].question}</h3>
      <div className="options">
        {data[currentQuestion].answers.map((answer) => (
          <div key={answer} className="option">
            <input
              className="radio-cus"
              type="radio"
              name="answer"
              value={answer}
              disabled={disabled}
              onChange={() => answerSelectHandler(answer)}
            />
            <label className="la-ma">{answer}</label>
          </div>
        ))}
      </div>

      <div className="button">
        <button onClick={nextButtonHandler}>Next</button>
      </div>
      <div className="response">
        <p style={{ color: disabled ? "red" : "green" }}>{response}</p>
      </div>
    </div>
    )
    
    
  );

  const renderResults = () => (
    <div className="box">
      <h3>Quiz Results</h3>
      <p>
        You answered {numCorrectAnswers} out of {data.length} questions
        correctly.
      </p>
      <div className="button">
        <button onClick={resetQuiz}>Reset Quiz</button>
      </div>
    </div>
  );

  return (
    <div className="main">
      <div className="head">
        <h1>CSS Quiz Game</h1>
      </div>
      {showResults ? renderResults() : renderQuiz()}
    </div>
  );
}

export default Quiz;
