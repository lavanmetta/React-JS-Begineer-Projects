import React from "react";
import "./Header.css";
function Header(props) {
  const { currentScore, topScore, gameProgress } = props;
//   console.log("currentScore: " + currentScore)
//   console.log("topScore: " + topScore)
  return (
    <div>
      <div className="header-container">
        <h1>Emoji😎 Game</h1>

        {gameProgress && (
          <div>
            <h2>{currentScore}</h2>
            <h2>{topScore}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
