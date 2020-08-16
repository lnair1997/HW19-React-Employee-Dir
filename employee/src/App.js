import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import EmployeeTable from "./components/EmployeeTable";
import employees from "./employee.json";

class App extends Component {

  state = {
    employees
  };

  sortByName = () => {
    const employees = this.state.employees.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );

    this.setState({ results: employees });
    console.log(employees);
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
        <Navbar findName={this.findName} />

        <table className="table">
          <thead>
            <tr>
              <th onClick={() => this.sortByName(employees.name)}>Name</th>
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