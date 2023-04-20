import React, { useState } from "react";

import Card from "../Card/Card";
import Header from "../Header/Header";

import "./Emoji.css";
import Result from "../ResultCard/Result";

function Emoji(props) {
  const { emojisList } = props;

  const [state, setState] = useState({
    activeEmojisList: [],
    gameProgress: true,
    topScore: 0,
  });

  // reset game progress

  const resetGame = () => {
    setState({ activeEmojisList: [], gameProgress: true });
  };

  //   result Render starts here

  const renderResults = () => {
    const isWon = state.activeEmojisList.length === emojisList.length;

    return (
      <Result
        score={state.activeEmojisList.length}
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
    
    let newScore = state.topScore;
    
    if (currentScore > newScore) {
      newScore = currentScore;
    }

    setState({ topScore: newScore, gameProgress: false });
  };

  // start a game

  const clickEmoji = (id) => {
    const isClicked = state.activeEmojisList.includes(id);
    const clickedEmojiLength = state.activeEmojisList.length;

    if (isClicked) {
      finishGame(clickedEmojiLength);
    } else {
      if (clickedEmojiLength === emojisList.length - 1) {
        finishGame(emojisList.length);
      }
      setState( prevState => ({
        ...prevState,
        activeEmojisList: [...prevState.activeEmojisList, id],
      }));
      console.log("isClicked  : " + isClicked)
      console.log("clickedEmojiLength  : " + clickedEmojiLength)
      console.log("emojiListLength  : " + emojisList.length)
      console.log("stateActiveEmojiLength  : " + state.activeEmojisList.length)
      
    }
    
  };

  return (
    <div className="main-container">
      <Header
        currentScore={state.activeEmojisList.length}
        topScore={state.topScore}
        gameProgress={state.gameProgress}
      />
      <div className="emoji-main-container">
        {state.gameProgress ? renderEmojiList() : renderResults()}
      </div>
    </div>
  );
}

export default Emoji;
