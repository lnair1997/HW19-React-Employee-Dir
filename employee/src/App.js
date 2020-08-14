import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SearchContainer from "./components/SearchContainer";
import './App.css';

function App() {
  return (
    <div>
      <Jumbotron />
        <Navbar />
        <SearchContainer />
    </div>
  );
}

export default App;
