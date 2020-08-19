import React from "react";
import "./Widget.css";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import { Search } from "@material-ui/icons";

function Widget() {
  return (
    <div className="widget">
      <div className="widget-input">
        <Search className="widget-search-icon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widget-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "@reactjs is awsome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widget;
