import React, { useContext } from "react";
import { CountContext } from "./CounterContext";

function Counter() {
  const context = useContext(CountContext);
  const { count, increment, decrement } = context;

  return (
    <>
      <h1>I am a gorgeous counter</h1>
      <div>{count}</div>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Substract</button>
    </>
  );
}
export default Counter;
