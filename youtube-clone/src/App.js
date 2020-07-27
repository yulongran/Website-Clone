import React from "react";
import "./App.css";
import { Header, SideNav, VideoCard, TagBar } from "./components";
import data from "./assets/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className="side-nav-container">
          <SideNav />
        </div>
        <div className="main-content-container">
          <TagBar />
          <span className="video-content-header">Recommended </span>
          <div className="video-content-container">
            {data.items.map((video) => (
              <VideoCard video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
