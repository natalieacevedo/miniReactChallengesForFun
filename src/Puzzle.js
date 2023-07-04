import React, { useState, useEffect } from "react";

function Puzzle() {
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
  const [random, setRandom] = useState(
    [...allNumbers].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
    const areEqual = allNumbers.every((el, i) => {
      if (el === random[i]) {
        console.log(el, random[i]);
        return true;
      } else {
        return false;
      }
    });
    if (areEqual) {
      alert("game is over");
    }
  }, [random]);
  function move(e, ind) {
    const currentNumberIndex = ind;
    const zeroNumberIndex = random.indexOf(0);
    const leftIndex = currentNumberIndex - 1;
    const rightIndex = currentNumberIndex + 1;
    const bottomIndex = currentNumberIndex + 4;
    const topIndex = currentNumberIndex - 4;
    console.log(rightIndex);
    setRandom((prev) => {
      let newOrder = [...prev];
      if (
        leftIndex === zeroNumberIndex ||
        leftIndex === undefined ||
        (rightIndex === zeroNumberIndex && currentNumberIndex % 4 !== 0) ||
        (bottomIndex === zeroNumberIndex && currentNumberIndex % 4 !== 0) ||
        (topIndex === zeroNumberIndex && currentNumberIndex % 4 !== 0)
      ) {
        newOrder[zeroNumberIndex] = newOrder[currentNumberIndex];
        newOrder[currentNumberIndex] = 0;
      }
      return newOrder;
    });
  }

  return (
    <>
      <h1>Here is the puzzle</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 40px)",
          gridTemplateRows: "repeat(4, 40px)",
        }}
      >
        {random.map((el, ind) => (
          <div
            key={ind}
            onClick={(e) => move(e, ind)}
            style={{ border: "1px solid black" }}
          >
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

export default Puzzle;
