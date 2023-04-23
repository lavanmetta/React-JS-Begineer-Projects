import React, { useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./Gallery.css";
import badWords from 'bad-words'
const apiKey = "37cb757ac8d5c1d0264cddbf4eb223da";
function Gallery() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [err, SetError] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const bannedWords = new badWords();
    if (bannedWords.isProfane(search)) {
      SetError("Adult content is not allowed.");
    } else {
      axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
        )
        .then((response) => {
          setData(response.data.photos.photo);
          SetError("");
        })
        .catch((err) => {
          SetError("Encountered error: " + err);
        });
    }
  };

  return (
    <div className="main-div">
      <h1>Gallery Search</h1>
      <div className="sec-div">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={changeHandler}
            placeholder=""
          />
          <input type="submit" className="button" name="Search" />
        </form>
      </div>
      <p>{err}</p>
      <div className="pic">
        {data.length > 1 ? (
          <Item data={data} />
        ) : (
          <h2>Search and get images</h2>
        )}
      </div>
    </div>
  );
}

export default Gallery;
