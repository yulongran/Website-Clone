import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://yt3.ggpht.com/-A7R2gmOP4e0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck_B2dQYGXzZxU6phlAaeAQEH7neQ/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg" />
          <input placeholder="What's happening" type="text" />
        </div>
        <input
          className="tweetBox-img"
          placeholder="Enter image url"
          type="text"
        />
        <Button className="tweetBox-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
