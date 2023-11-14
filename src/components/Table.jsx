import React from "react";
import { data } from "../data";

function Table() {
  return (
    <table border="2px">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {data.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.id}</td>
            <td>{val.title}</td>
            <td>{val.price}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Table;
