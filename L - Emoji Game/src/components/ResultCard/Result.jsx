import React from "react";
import podium from "../../Images/podium.mp4";
import gameover from "../../Images/gameover.mp4";
import './Result.css'
function Result(props) {
  const { score, playAgain, isWon } = props;
  const win = isWon ? "You win" : "You lose";
  const scoreLable = isWon ? "Best Score" : "Score";
  const imgUrl = isWon ? podium : gameover;
  return (
    <div className="result-card">
      <div>
        <div>
          <video width="120" height="140" autoPlay loop>
            <source src={imgUrl} type="video/mp4" />
          </video>
        </div>
        <div className="det">
          <h2>{win}</h2>
          <p>{scoreLable}</p>
          <h2>{score}/12</h2>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
