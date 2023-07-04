import React, { useState, useEffect } from "react";

const SYMBOLS = ["X", "O"];
// positions that if all are equal means a win
const WINNER_LINES = [
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

function TicTac() {
  const [grid, setGrid] = useState(Array.from({ length: 9 }));
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    let isWinner = WINNER_LINES.some(
      ([a, b, c]) => grid[a] && (grid[a] === grid[b]) & (grid[a] === grid[c])
    );
    setIsWin(isWinner);
  }, [grid]);

  useEffect(() => {
    if (isWin) {
      alert("you win honey");
      setGrid(Array.from({ length: 9 }));
      setIsWin(false);
    }
  }, [isWin]);

  function handleClick(e, i) {
    e.preventDefault();
    if (!grid[i]) {
      setGrid((prev) => {
        const move = grid.filter((v) => v).length % 2;
        let newGrid = [...prev];
        newGrid[i] = SYMBOLS[move];
        return newGrid;
      });
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 40px)",
        gridTemplateRows: "repeat(3,40px)",
        margin: "0 auto",
        width: "50%",
      }}
    >
      {grid.map((el, i) => {
        return (
          <div
            key={i}
            onClick={(e) => handleClick(e, i)}
            style={{
              borderRight: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            {el}
          </div>
        );
      })}
    </div>
  );
}

export default TicTac;
