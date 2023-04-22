import React, { useState } from "react";
import axios from "axios";

const apiKey = "37cb757ac8d5c1d0264cddbf4eb223da";
function Gallery() {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        console.log(response.data.photos.photo);
      });
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
          <input type="submit" name="Search" />
        </form>
      </div>
    </div>
  );
}

export default Gallery;
