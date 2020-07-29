import React from "react";
import { Email } from "@material-ui/icons";
import "./TopicNav.css";

function TopicNav() {
  return (
    <ul className="TopicNav">
      <li className="topic">
        <a href="/#">
          <Email className="topic-icon" />
          <label>Mail</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Coronavirus</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>News</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Finance</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Sports</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Politics</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Black Lives Matter</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Entertainment</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Life</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Stay Home</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>Subscriptions</label>
        </a>
      </li>
      <li className="topic">
        <a href="/#">
          <label>More...</label>
        </a>
      </li>
    </ul>
  );
}

export default TopicNav;
