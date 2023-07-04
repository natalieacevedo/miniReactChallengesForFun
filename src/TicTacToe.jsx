import React, { useState, useEffect } from "react";

function TicTac() {
  const [placeHolders, setPlaceHolders] = useState(Array.from({ length: 9 }));
  const [shuffleCharacters, setShuffleCharacteres] = useState(["x", "O"]);
  const [showChar, setShowChar] = useState(false);

  useEffect(() => {
    console.log(placeHolders);
    let isXWinner;
    let isOWinner;

    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      const isWinnerLine = [placeHolders[a], placeHolders[b], placeHolders[c]];
      isXWinner = isWinnerLine.every((el) => el === "x");
      isOWinner = isWinnerLine.every((el) => el === "O");
    }
    if (isXWinner || isOWinner) {
      alert("you win honey");
      setPlaceHolders(Array.from({ length: 9 }));
    }
  }, [placeHolders]);

  function getRandomCharacter(e, i) {
    e.preventDefault();
    setShowChar((prev) => !prev);
    setShuffleCharacteres((prev) => {
      const randomChars = [...prev].sort(() => 0.5 - Math.random());
      return randomChars;
    });

    setPlaceHolders((prev) => {
      let arrWithClickedElement = [...prev];
      if (showChar) {
        arrWithClickedElement[i] = shuffleCharacters[0];
      } else {
        arrWithClickedElement[i] = "";
      }

      return arrWithClickedElement;
    });
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
      {placeHolders.map((el, i) => {
        return (
          <div
            key={i}
            onClick={(e) => getRandomCharacter(e, i)}
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
