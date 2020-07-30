import React from "react";
import "./Main.css";
import { News, Trending } from "./components";
import DATA from "../../assets/data.json";

function Main() {
  return (
    <div className="Main">
      <div className="news-container">
        {DATA.map((news) => (
          <News news={news} key={news.news_title} />
        ))}
      </div>
      <div className="trending-container">
        <Trending />
      </div>
    </div>
  );
}

export default Main;
