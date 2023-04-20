import React from "react";
import "./Header.css";
function Header(props) {
  const { currentScore, topScore, gameProgress } = props;
//   console.log("currentScore: " + currentScore)
//   console.log("topScore: " + topScore)
  return (
    <div>
      <div className="header-container">
        <h1>EmoG😎</h1>

        {gameProgress && (
          <div className="score">
            <h2>Score: {currentScore}</h2>
            <h2>Top Score: {topScore}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
