import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employee.json";
import "./App.css";

class App extends Component {

  state = {
    employees,
    results: []
  };

  sortByName = () => {
    const newEmployees = this.state.employees.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    this.setState({ results: newEmployees });
    console.log(newEmployees);
  };

  findName = event => {
    const employees = this.state.employees.filter(employees => {
      return employees.name.toLowerCase().includes(event.target.value.toLowerCase())
    });

    this.setState({ employees });
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container-md">
          <Navbar findName={this.findName} />

          <table className="table table-striped w-auto">
            <thead>
              <tr>
                <th onClick={() => this.sortByName(employees.name)}>Name</th>
                <th>Occupation</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map(employee => (
                <EmployeeTable
                  id={employee.id}
                  name={employee.name}
                  occupation={employee.occupation}
                  phone={employee.phone}
                  email={employee.email}
                />
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
};

export default App;