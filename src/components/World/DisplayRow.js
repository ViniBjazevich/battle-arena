import React from "react";
import character from "../../images/smiley.png";
export default function DisplayRow({ row, rowIndex, characterPositionX, characterPositionY }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        margin: "1rem 0",
      }}
    >
      {row.map((col, colIndex) => {
        let displayCharacter = false;
        let background = "grey";

        if (
          characterPositionY === rowIndex &&
          characterPositionX === colIndex
        ) {
          displayCharacter = true;
        }

        if (col) {
          background = "green";
        }

        return (
          <div
            key={colIndex}
            style={{
              width: 100,
              height: 100,
              background,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {displayCharacter && <img src={character} height="80" width="80" />}
          </div>
        );
      })}
    </div>
  );
}
