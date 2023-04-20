import React from "react";
import "./Card.css";
function Card(props) {
  const { emojiDetails, clickEmoji } = props;
  const { id, emojiImg, emojiName } = emojiDetails;

  const onClickEmoji = () => {
    clickEmoji(id);
  };
  return (
    <div className="each-emoji">
      <button onClick={onClickEmoji}>
        <img src={emojiImg} alt={emojiName} />
      </button>
    </div>
  );
}

export default Card;
