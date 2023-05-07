import React, { useEffect, useState } from "react";
import "./Quiz.css";
import QuestionsList from "../Data";

function Quiz() {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  useEffect(() => {
    const listOfData = QuestionsList();
    setData(listOfData);
  }, []);

  const nextButtonHandler = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const answerSelectHandler = (answer) => {
    setSelectedAnswer(answer);
    
  };



  
  

  return (
    <div className="main">
      <div className="head">
        <h1>CSS Quiz Game</h1>
      </div>
      {data[currentQuestion] && (
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
                  checked={selectedAnswer === answer}
                  onChange={() => answerSelectHandler(answer)}
                />
                <label className="la-ma">{answer}</label>
              </div>
            ))}
          </div>
          <div className="button">
            <button onClick={nextButtonHandler}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
