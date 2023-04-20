

import emoji1 from "../../Images/emoji1.png";
import emoji2 from "../../Images/emoji2.png";
import emoji3 from "../../Images/emoji3.png";
import emoji4 from "../../Images/emoji4.png";
import emoji5 from "../../Images/emoji5.png";
import emoji6 from "../../Images/emoji6.png";
import emoji7 from "../../Images/emoji7.png";
import emoji8 from "../../Images/emoji8.png";
import emoji9 from "../../Images/emoji9.png";
import emoji10 from "../../Images/emoji10.png";
import emoji11 from "../../Images/emoji11.png";
import emoji12 from "../../Images/emoji12.png";

import Emoji from "../Emoji/Emoji";

const emojisList = [
  {
    id: 0,
    emojiName: "laugh",
    emojiImg: emoji1,
  },
  {
    id: 1,
    emojiName: "love",
    emojiImg: emoji3,
  },
  {
    id: 2,
    emojiName: "cross",
    emojiImg: emoji2,
  },
  {
    id: 3,
    emojiName: "emotion",
    emojiImg: emoji4,
  },
  {
    id: 4,
    emojiName: "sleep",
    emojiImg: emoji5,
  },
  {
    id: 5,
    emojiName: "Full laugh",
    emojiImg: emoji6,
  },
  {
    id: 6,
    emojiName: "cry",
    emojiImg: emoji7,
  },
  {
    id: 7,
    emojiName: "money",
    emojiImg: emoji8,
  },
  {
    id: 8,
    emojiName: "fulled laugh",
    emojiImg: emoji9,
  },
  {
    id: 9,
    emojiName: "grab love",
    emojiImg: emoji10,
  },
  {
    id: 10,
    emojiName: "what",
    emojiImg: emoji11,
  },
  {
    id: 11,
    emojiName: "watering",
    emojiImg: emoji12,
  },
];

const ListData = () => <Emoji emojisList={emojisList} />;

export default ListData;
