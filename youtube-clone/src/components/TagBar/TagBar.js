import React from "react";
import "./TagBar.css";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";

function TagBar() {
  return (
    <div className="tag-bar">
      <div className="tag-container">
        <div className="tag">All recommandations</div>
        <div className="tag">Sports</div>
        <div className="tag">News</div>
        <div className="tag">Anime</div>
        <div className="tag">Swift</div>
        <div className="tag">JavaScript</div>
        <div className="tag">Python</div>
        <div className="tag">Pascal</div>
        <div className="tag">Computer Science</div>
        <div className="tag">Software Engineer</div>
        <div className="tag">Machine Learning</div>
        <div className="tag">AI</div>
        <div className="tag">Web Development</div>
        <div className="tag">Computer Science</div>
        <div className="tag">Software Engineer</div>
      </div>
      <ChevronRight />
    </div>
  );
}

export default TagBar;
