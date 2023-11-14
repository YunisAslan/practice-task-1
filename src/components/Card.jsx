import React from "react";
import { data } from "../data";

function Card() {
  const sortedData = data.sort((a, b) => b.rating.rate - a.rating.rate);

  const maxRating = sortedData[0].rating.rate;

  return (
    <div className="card">
      <img
        src="https://source.unsplash.com/random"
        alt="Avatar"
        style={{ width: "100px", height: "100px" }}
      />
      <div className="container">
        <h4>
          <b>{sortedData[0].title}</b>
        </h4>
        <p>Max Rating: {maxRating}</p>
      </div>
    </div>
  );
}

export default Card;
