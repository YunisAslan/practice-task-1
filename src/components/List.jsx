import React from "react";
import { data } from "../data";

function List() {
  const filteredDatas = data.sort((a, b) => b.price - a.price);

  return (
    <ul>
      {filteredDatas.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}

export default List;
