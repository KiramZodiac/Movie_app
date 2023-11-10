import React from "react";
import { useEffect } from "react";

function Favourites() {
  const [count, setCount] = React.useState(0);
  const [car, setCar] = React.useState(["kiram", "jack", "tom"]);

  const [txt, setText] = React.useState("hey");

  function Add() {
    setCount(count + 1);
  }

  const myCar = car.map((ca) => {
    return (
      <div>
        <h1>{ca.toLowerCase}</h1>
      </div>
    );
  });

  return (
    <div>
      <button onClick={Add}>likes</button>
      <h1>{count}</h1>
      <h2>{txt}</h2>
      <h2>{myCar}</h2>
    </div>
  );
}

export default Favourites;
