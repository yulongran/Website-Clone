import React from "react";
import "./App.css";
import { Header, SideNav, VideoCard } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className="side-nav-container">
          <SideNav />
        </div>
        <div className="video-content-container">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
}

export default App;
