import React, { useState } from "react";

import Card from "../Card/Card";
import Header from "../Header/Header";
import Result from "../ResultCard/Result";

import "./Emoji.css";

function Emoji(props) {
  const { emojisList } = props;

  const [activeEmojisList, setActiveEmojisList] = useState([]);
  const [gameProgress, setGameProgress] = useState(true);
  const [topScore, setTopScore] = useState(0);

  // reset game progress

  const resetGame = () => {
    setActiveEmojisList([]);
    setGameProgress(true);
  };

  //   result Render starts here

  const renderResults = () => {
    const isWon = activeEmojisList.length === emojisList.length;

    return (
      <Result
        score={activeEmojisList.length}
        playAgain={resetGame}
        isWon={isWon}
      />
    );
  };

  //   render emojis list

  const shuffleList = () => {
    return emojisList.sort(() => Math.random() - 0.5);
  };

  const renderEmojiList = () => {
    const ListOfEmojis = shuffleList();
    return ListOfEmojis.map((each) => (
      <Card key={each.id} emojiDetails={each} clickEmoji={clickEmoji} />
    ));
  };

  // finish game

  const finishGame = (currentScore) => {
    let newScore = topScore;

    if (currentScore > newScore) {
      newScore = currentScore;
    }

    setTopScore(newScore);
    setGameProgress(false);
  };

  // start a game

  const clickEmoji = (id) => {
    const isClicked = activeEmojisList.includes(id);
    const clickedEmojiLength = activeEmojisList.length;

    if (isClicked) {
      finishGame(clickedEmojiLength);
    } else {
      if (clickedEmojiLength === emojisList.length - 1) {
        finishGame(emojisList.length);
      }
      setActiveEmojisList((prevState) => {
        return [...prevState, id];
      });
    }
  };

  return (
    <>
      <Header
        currentScore={activeEmojisList.length}
        topScore={topScore}
        gameProgress={gameProgress}
      />
      <div className="main-container">
        <div className="emoji-main-container"></div>
        {gameProgress === true ? (
          <div className="emoji-main-container">{renderEmojiList()}</div>
        ) : (
          <div>{renderResults()}</div>
        )}
      </div>
    </>
  );
}

export default Emoji;
