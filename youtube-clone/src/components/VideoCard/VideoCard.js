import React from "react";
import "./VideoCard.css";

function VideoCard(props) {
  function convertViews(views) {
    if (views > 1000000) {
      return (views / 1000000).toFixed(1) + "M";
    }
    return (views / 1000).toFixed(1) + "K";
  }

  function truncateTitle(title) {
    if (title.length > 50) {
      return title.substring(0, 50) + " ...";
    }
    return title;
  }

  return (
    <div className="video-card">
      <img
        className="video-thumbnail"
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="vide-description-container">
        <img
          className="video-profile-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT2U_-iUMXmUpHdq7hL1tUmWjpbRPLaCPxzg&usqp=CAU"
        />
        <div className="video-description">
          <h1 className="video-title">
            {truncateTitle(props.video.snippet.title)}
          </h1>
          <h2 className="video-channel">{props.video.snippet.channelTitle}</h2>
          <h2 className="video-views-time">
            {convertViews(props.video.statistics.viewCount)} views • 2 weeks ago
          </h2>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
