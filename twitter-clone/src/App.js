import React from "react";
import "./App.css";
import { SideBar, Feed, Widget } from "./components";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widget />
    </div>
  );
}

export default App;
