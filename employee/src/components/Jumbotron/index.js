import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center bg-info text-white">
      <h1 className="text-center font-weight-bold"><a href="/">Employee Directory</a></h1>
      <h6>Sort or Search by Name</h6>
    </div>
  );
};
export default Jumbotron;