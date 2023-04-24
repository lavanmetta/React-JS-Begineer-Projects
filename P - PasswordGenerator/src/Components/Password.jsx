import React, { useState } from "react";
import "../App.css";
function Password() {
  const [password, setPassword] = useState();
  const [input, setInput] = useState([]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const passwordGenerator = (e) => {
    e.preventDefault();
    const { capital, small, numbers, special } = input;

    let generatedPassword = "";
    if (
      capital.length < 2 ||
      small.length < 2 ||
      numbers.length < 2 ||
      special.length < 2
    ) {
      setPassword("All inputs must have at least 2 characters");
    } else {
      const passwordLength =
        capital.length + small.length + numbers.length + special.length;
      for (let i = 0; i < passwordLength; i++) {
        const inputIndex = Math.floor(Math.random() * 4);
        switch (inputIndex) {
          case 0:
            generatedPassword +=
              capital[Math.floor(Math.random() * capital.length)];
            break;
          case 1:
            generatedPassword +=
              small[Math.floor(Math.random() * small.length)];
            break;
          case 2:
            generatedPassword +=
              numbers[Math.floor(Math.random() * numbers.length)];
            break;
          case 3:
            generatedPassword +=
              special[Math.floor(Math.random() * special.length)];
            break;
          default:
            break;
        }
      }
      setPassword(generatedPassword);
    }
  };

  return (
    <div className="main">
      <div>
        <h1>Password Generator</h1>
      </div>
      <div className="in">
        <form onSubmit={passwordGenerator}>
          <input
            type="text"
            placeholder="words in Capital"
            onChange={onChangeHandler}
            name="capital"
            className="cap"
            required
          />
          <input
            type="text"
            placeholder="words in small"
            onChange={onChangeHandler}
            name="small"
            className="sm"
            required
          />
          <input
            type="number"
            placeholder="Favorite numbers"
            onChange={onChangeHandler}
            name="numbers"
            className="num"
            required
          />
          <input
            type="text"
            placeholder="special characters"
            onChange={onChangeHandler}
            name="special"
            className="sp"
            required
          />
          <input type="submit" className="btn" value="Submit" />
        </form>
        <h5 className="res">{password}</h5>
      </div>
    </div>
  );
}

export default Password;
