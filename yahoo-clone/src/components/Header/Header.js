import React, { useEffect, useState } from "react";
import "./Header.css";
import { Search, Notifications, Email } from "@material-ui/icons";
import { TopicNav } from "./components";

function Header() {
  const [hide, handleHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleHide(true);
      } else {
        handleHide(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className="header">
      <div className="header-top">
        <img
          className="logo-img"
          src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_205x58_frontpage_2x.png"
          alt="Yahoo"
        />
        <form className="header-search-bar">
          <div className="search-input-container">
            <input type="text" />
          </div>
          <button className="search-icon-container">
            <Search className="icon" />
          </button>
        </form>
        <div className="header-right-section">
          <button className="sign-in-btn">Sign in</button>
          <Notifications className="header-right-icon" fontSize="large" />
          <Email className="header-right-icon" fontSize="large"></Email>
          <label>Mail</label>
        </div>
      </div>
      <div className={`header-bottom ${hide && "header-bottom-hide"}`}>
        <TopicNav />
      </div>
    </div>
  );
}

export default Header;
