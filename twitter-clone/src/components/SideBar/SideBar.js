import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import {
  Twitter,
  Home,
  Search,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  ListAlt,
  PermIdentity,
  MoreHoriz,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sideBar">
      <Twitter className="sideBar-twitter-icon" />
      <SideBarOption active text="Home" Icon={Home} />
      <SideBarOption text="Explore" Icon={Search} />
      <SideBarOption text="Notifications" Icon={NotificationsNone} />
      <SideBarOption text="Messages" Icon={MailOutline} />
      <SideBarOption text="Bookmarks" Icon={BookmarkBorder} />
      <SideBarOption text="Lists" Icon={ListAlt} />
      <SideBarOption text="Profile" Icon={PermIdentity} />
      <SideBarOption text="More" Icon={MoreHoriz} />
      <Button variant="outlined" className="sideBar-tweet-btn" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
