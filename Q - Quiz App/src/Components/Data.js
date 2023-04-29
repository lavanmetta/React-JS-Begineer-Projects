const Questions = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    explanation: "CSS stands for Cascading Style Sheets.",
  },
  {
    id: 2,
    question: "How do you select an element by its ID in CSS?",
    answers: ["#elementID", ".elementID", "elementID", "id.elementID"],
    explanation:
      "To select an element by its ID in CSS, you use the # symbol followed by the element's ID, like this: #elementID.",
  },
  {
    id: 3,
    question: "What is the default value of the position property in CSS?",
    answers: ["static", "relative", "absolute", "fixed"],
    explanation: "The default value of the position property in CSS is static.",
  },
  {
    id: 4,
    question:
      "What is the CSS property used to add a shadow effect to an element?",
    answers: ["box-shadow", "text-shadow", "shadow-effect", "element-shadow"],
    explanation:
      "The CSS property used to add a shadow effect to an element is box-shadow.",
  },
  {
    id: 5,
    question:
      "What is the CSS property used to set the background color of an element?",
    answers: ["background-color", "color", "background", "background-image"],
    explanation:
      "The CSS property used to set the background color of an element is background-color.",
  },
  {
    id: 6,
    question: "What is the CSS property used to make text bold?",
    answers: ["font-weight", "text-weight", "bold", "text-bold"],
    explanation: "The CSS property used to make text bold is font-weight.",
  },
  {
    id: 7,
    question: "What is the CSS property used to make text italic?",
    answers: ["font-style", "text-style", "italic", "text-italic"],
    explanation: "The CSS property used to make text italic is font-style.",
  },
  {
    id: 8,
    question: "What is the CSS property used to add space between elements?",
    answers: ["margin", "padding", "border", "spacing"],
    explanation:
      "The CSS property used to add space between elements is margin.",
  },
  {
    id: 9,
    question: "What is the CSS property used to align text within an element?",
    answers: ["text-align", "align", "text-justify", "justify"],
    explanation:
      "The CSS property used to align text within an element is text-align.",
  },
  {
    id: 10,
    question:
      "What is the CSS property used to set the font family of an element?",
    answers: ["font-family", "font-type", "font-style", "font"],
    explanation:
      "The CSS property used to set the font family of an element is font-family.",
  },
];

export default function QuestionsList() {
  return Questions;
}
