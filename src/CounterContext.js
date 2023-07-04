import React, { createContext, useState } from "react";
const CountContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => (prev += 1));
  }

  function decrement() {
    setCount((prev) => {
      if (prev > 0) {
        return (prev -= 1);
      }
      return 0;
    });
  }

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
}

export { CounterProvider, CountContext };
