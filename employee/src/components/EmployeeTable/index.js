import React from "react";

function EmployeeTable(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default EmployeeTable;