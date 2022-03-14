import React, { useState, useEffect } from "react";
import DisplayRow from "./DisplayRow";

export default function World() {
  const [characterPositionX, setCharacterPositionX] = useState(0);
  const [characterPositionY, setCharacterPositionY] = useState(0);
  const worldMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1],
  ];

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [characterPositionX, characterPositionY]);

  function handleKeyPress(e) {
    switch (e.keyCode) {
      case 37:
        if (characterPositionX > 0) {
          setCharacterPositionX((prev) => prev - 1);
        }
        break;
      case 38:
        if (characterPositionY > 0) {
          setCharacterPositionY((prev) => prev - 1);
        }
        break;
      case 39:
        if (characterPositionX < worldMap[0].length - 1) {
          setCharacterPositionX((prev) => prev + 1);
        }
        break;
      case 40:
        if (characterPositionY < worldMap.length - 1) {
          setCharacterPositionY((prev) => prev + 1);
        }
        break;
      default:
    }
  }

  return (
    <div>
      {worldMap.map((row, index) => (
        <DisplayRow
          row={row}
          rowIndex={index}
          key={index}
          characterPositionX={characterPositionX}
          characterPositionY={characterPositionY}
        />
      ))}
    </div>
  );
}
