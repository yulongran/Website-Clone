import React from "react";
import "./VideoFooter.css";
import { MusicNote } from "@material-ui/icons";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter_ticker">
          <MusicNote className="videoFooter_icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <p>
                {song}
                {index}{" "}
              </p>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
