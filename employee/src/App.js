import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import employees from "./employee.json";

class App extends Component {

  state = {
    employees
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <Navbar />
        {this.state.employees.map(employee => (
            <Main
              id={employee.id}
              name={employee.name}
              occupation={employee.occupation}
              phone={employee.phone}
              email={employee.email}
            />
          ))}
      </div>
    );
  }
};

export default App;