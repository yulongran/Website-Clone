import React from "react";
import "./SideNav.css";
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  VideoLabel,
  WatchLater,
  ThumbUpAlt,
  KeyboardArrowDown,
  YouTube,
  Theaters,
  SportsEsports,
  Airplay,
  BeachAccess,
  EmojiObjects,
  Settings,
  Flag,
  Help,
  Feedback,
} from "@material-ui/icons";

function SideNav() {
  return (
    <div className="side-nav">
      <ul>
        <li>
          <a href="/">
            <div className="side-nav-icon-wrapper">
              <Home className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Home</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Whatshot className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Trending</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Subscriptions
                className="side-nav-icon"
                style={{ fontSize: 23 }}
              />
            </div>
            <label>Subscriptions</label>
          </a>
        </li>
      </ul>
      <ul className="side-nav-ul">
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <VideoLibrary
                className="side-nav-icon"
                style={{ fontSize: 23 }}
              />
            </div>
            <label>Library</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <History className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>History</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <VideoLabel className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Your Videos</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <WatchLater className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Watch Later</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <ThumbUpAlt className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Liked Videos</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <KeyboardArrowDown
                className="side-nav-icon"
                style={{ fontSize: 23 }}
              />
            </div>
            <label>Show more</label>
          </a>
        </li>
      </ul>
      <ul className="side-nav-ul">
        <li>
          <h1 className="side-nav-ul-title">More from Youtube</h1>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <YouTube className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>YouTube Premium</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Theaters className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Movies & Shows</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <SportsEsports
                className="side-nav-icon"
                style={{ fontSize: 23 }}
              />
            </div>
            <label>Gaming</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Airplay className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Live</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <BeachAccess className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Fashion & Beauty</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <EmojiObjects
                className="side-nav-icon"
                style={{ fontSize: 23 }}
              />
            </div>
            <label>Learning</label>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Settings className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Settings</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Flag className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Report History</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Help className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Help</label>
          </a>
        </li>
        <li>
          <a>
            <div className="side-nav-icon-wrapper">
              <Feedback className="side-nav-icon" style={{ fontSize: 23 }} />
            </div>
            <label>Send feedback</label>
          </a>
        </li>
      </ul>
      <div className="footer">
        <div className="footer-primary">
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Copyright</a>
          <a href="#">Contact us</a>
          <a href="#">Creators</a>
          <a href="#">Advertise</a>
          <a href="#">Developers</a>
        </div>
        <div className="footer-secondary">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Policy & Safety</a>
          <a href="#">How Youtube works</a>
          <a href="#">Test new features</a>
        </div>
      </div>
      <div className="copyright">
        <h1>© 2020 Google LLC</h1>
      </div>
    </div>
  );
}

export default SideNav;
