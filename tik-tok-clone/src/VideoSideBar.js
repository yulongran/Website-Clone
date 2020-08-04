import React, { useState } from "react";
import "./VideoSideBar.css";
import { Favorite, FavoriteBorder, Message, Share } from "@material-ui/icons";

function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="videoSideBar">
      <div className="videoSideBar_button">
        {liked ? (
          <Favorite onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorder onClick={(e) => setLiked(true)} />
        )}
        <p>{likes}</p>
      </div>
      <div className="videoSideBar_button">
        <Message />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar_button">
        <Share />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
