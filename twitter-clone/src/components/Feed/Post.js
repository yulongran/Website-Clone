import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import {
  VerifiedUser,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://yt3.ggpht.com/-A7R2gmOP4e0/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuck_B2dQYGXzZxU6phlAaeAQEH7neQ/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg"></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              Yulong Ran{" "}
              <span className="post-header-text-special">
                <VerifiedUser className="post-badge" />
                @yulongran
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>Let's build a twitter clone</p>
          </div>
          <img
            src="https://media1.giphy.com/media/Tia2InBEWaQgckP3UG/200.gif"
            alt=""
          />
          <div className="post-footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
