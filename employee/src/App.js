import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
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

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Occupation</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>

          {this.state.employees.map(employee => (
            <EmployeeTable
              id={employee.id}
              name={employee.name}
              occupation={employee.occupation}
              phone={employee.phone}
              email={employee.email}
            />
          ))}

        </table>
      </div>
    );
  }
};

export default App;