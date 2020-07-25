import React from "react";
import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="video-card">
      <img
        className="video-thumbnail"
        src="http://i3.ytimg.com/vi/Q1cHoL4vaBs/maxresdefault.jpg"
      />
      <div className="vide-description-container">
        <img
          className="video-profile-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRT2U_-iUMXmUpHdq7hL1tUmWjpbRPLaCPxzg&usqp=CAU"
        />
        <div className="video-description">
          <h1 className="video-title">Let's build a Youtube</h1>
          <h2 className="video-channel">Clever Programmer</h2>
          <h2 className="video-views-time">456K views • 2 weeks ago</h2>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
