import React from "react";

export default function MoveSet({ moves, setTurn, opponent, setBattleLog }) {

  function handleAttack(move) {
    setBattleLog((prev) => {
      let logs = [...prev];
      logs.push(move);
      return logs;
    });
    setTurn(opponent.name);
  }

  return (
    <div>
      {moves.map((move, index) => (
        <button
          key={index}
          onClick={() => {handleAttack(move)}}
        >
          {move.name}
        </button>
      ))}
    </div>
  );
}
