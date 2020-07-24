import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchRomanceMovie}></Row>
    </div>
  );
}

export default App;
