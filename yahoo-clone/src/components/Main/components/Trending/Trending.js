import React from "react";
import "./Trending.css";

function Trending() {
  return (
    <div className="Trending">
      <div className="mark-homepage-container">
        <button className="homepage-btn">Make Yahoo your homepage</button>
      </div>
      <div className="trending-tag-container">
        <h1>Trending Now</h1>
        <ol className="trending-tag-list">
          <li>
            <a href="/#">2020 Emmy</a>
          </li>
          <li>
            <a href="/#">Michael Douglas</a>
          </li>
          <li>
            <a href="/#">Coronavirus</a>
          </li>
          <li>
            <a href="/#">John Saxon</a>
          </li>
          <li>
            <a href="/#">Susan Rice</a>
          </li>
          <li>
            <a href="/#">Buy Microsoft</a>
          </li>
          <li>
            <a href="/#">Watchmen</a>
          </li>
          <li>
            <a href="/#">Heals Act</a>
          </li>
          <li>
            <a href="/#">Merrell Shoes</a>
          </li>
          <li>
            <a href="/#">Mattress Ratings</a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Trending;
