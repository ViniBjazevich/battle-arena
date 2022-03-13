import React from "react";
import MoveSet from "./MoveSet";

export default function Monster({
  monster,
  turn,
  setTurn,
  setBattleLog,
  opponent,
}) {

  return (
    <div>
      <div>{monster.name}</div>
      <div>{monster.stats.health}</div>
      <div>
        {turn === monster.name && (
          <MoveSet
            monster={monster}
            setBattleLog={setBattleLog}
            moves={monster.move_set}
            setTurn={setTurn}
            opponent={opponent}
          />
        )}
      </div>
    </div>
  );
}
