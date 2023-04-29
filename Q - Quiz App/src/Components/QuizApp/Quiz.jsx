import React, { useEffect, useState } from "react";
import "./Quiz.css";
import QuestionsList from "../Data";

function Quiz() {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const listOfData = QuestionsList();
    setData(listOfData);
  }, []);

  const nextButtonHandler = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    console.log(currentQuestion);
  };

  return (
    <div>
      {data[currentQuestion] && (
        <div key={data[currentQuestion].id}>
          <p>{data[currentQuestion].question}</p>
          {data[currentQuestion].answers.map((answer) => (
            <span key={answer}>{answer}</span>
          ))}
        </div>
      )}
      <button onClick={nextButtonHandler}>Next</button>
    </div>
  );
}

export default Quiz;
