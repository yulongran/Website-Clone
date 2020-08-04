import React from "react";
import "./Header.css";
import {
  DehazeOutlined,
  SearchOutlined,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <button className="icon-button">
          <DehazeOutlined className="back-icon" />
        </button>
        <img
          className="youtube-img"
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/320px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="header-search">
        <div className="search-wrapper">
          <form className="search-form">
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
            </div>
            <button className="search-button">
              <SearchOutlined className="search-icon" fontSize="x-small" />
            </button>
          </form>
        </div>
      </div>
      <div className="header-right">
        <VideoCall className="header-right-icon" />
        <Apps className="header-right-icon" />
        <Notifications className="header-right-icon" />
        <img
          className="profile-image"
          alt=""
          src="https://bjedrocha.com/images/posts/gmail-style-avatars/avatar.png"
        />
      </div>
    </div>
  );
}

export default Header;
