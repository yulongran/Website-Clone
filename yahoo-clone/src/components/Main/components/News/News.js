import React from "react";
import "./News.css";

function News(props) {

  function truncate(s) {
    if (s.length > 200) {
      return s.substring(0, 200) + " ...";
    } else {
      return s;
    }
  }
  
  return (
    <div className="News">
      <div className="news-img-container">
        <img
          className="news-img"
          src={props.news.news_image}
          alt={props.news.news_category}
        />
      </div>
      <div className="news-content-container">
        <label className="news-category">
          {props.news.news_category}
          <label className="news-media">{props.news.news_media}</label>
        </label>
        <label className="news-title">{props.news.news_title}</label>
        <h3 className="news-description">
          {truncate(props.news.news_description)}
        </h3>
      </div>
    </div>
  );
}

export default News;
