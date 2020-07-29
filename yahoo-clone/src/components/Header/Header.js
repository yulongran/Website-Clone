import React from "react";
import "./Header.css";
import { Search, Notifications, Email } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          className="logo-img"
          src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"
          alt="Yahoo"
        />
      </div>
      <form className="header-search-bar">
        <div className="search-input-container">
          <input type="text" />
        </div>
        <button className="search-icon-container">
          <Search className="icon" fontSize="medium" />
        </button>
      </form>
      <div className="header-right-section">
        <button className="sign-in-btn">Sign in</button>
        <Notifications className="header-right-icon" fontSize="large" />
        <div className="header-right-icon-container">
          <Email className="header-right-icon" fontSize="large" />
          <label className="header-right-label">Mail</label>
        </div>
      </div>
    </div>
  );
}

export default Header;
