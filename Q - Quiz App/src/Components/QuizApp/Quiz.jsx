import React, { useEffect, useState } from "react";
import "./Quiz.css";
import QuestionsList from "../Data";



function Quiz() {
  const [data, setData] = useState([])

  useEffect(() => {
    const listOfData = QuestionsList()
     setData(listOfData)
  }, [])

  return (
    <div>
      {data.map((each) => (
        <p>{each.question}</p>
      ))}
    </div>
  );
}

export default Quiz;
