import React from "react";
import "./App.css";
import Video from "./Video.js";

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
