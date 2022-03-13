import React from "react";
import { calculateDamage } from "../../utils/calculations";

export default function MoveSet({
  monster,
  moves,
  setTurn,
  opponent,
  setBattleLog,
  setOpponentTeam,
  setMyTeam,
}) {
  function handleAttack(move) {
    const damage = calculateDamage(monster, opponent, move);

    setOpponentTeam((prev) => {
      if (damage >= prev.party[prev.inBattle].health) {
        prev.party[prev.inBattle].health = 0;
      } else {
        prev.party[prev.inBattle].health -= damage;
      }
      return prev;
    });

    setBattleLog((prev) => {
      let logs = [...prev];
      let logEntry = `${monster.name} used ${move.name}. ${opponent.name} took ${damage} damage.`;

      if (!opponent.health) {
        logEntry += ` ${opponent.name} has fainted.`;
      }

      logs.push(logEntry);
      return logs;
    });

    setTurn(opponent.name);
  }

  return (
    <div>
      {moves.map((move, index) => (
        <button
          key={index}
          onClick={() => {
            handleAttack(move);
          }}
        >
          {move.name}
        </button>
      ))}
    </div>
  );
}
