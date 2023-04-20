import React from 'react'

function Result(props) {
    const {score, playAgain, isWon } = props;
    console.log(score)
  return (
    <div>
      <h1>ScoreCard</h1>
    </div>
  )
}

export default Result
