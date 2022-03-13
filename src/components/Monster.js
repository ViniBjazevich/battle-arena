import React from "react";
import MoveSet from "./MoveSet";

export default function Monster({
  monster,
  turn,
  setTurn,
  setBattleLog,
  opponent,
  setOpponentTeam,
  setMyTeam,
}) {
  return (
    <div>
      <div>{monster.name}</div>
      <div style={{ display: "flex" }}>
        <progress id="file" max={monster.stats.health} value={monster.health}>
          {monster.health}
        </progress>
        <div>{monster.health}</div>
        <div>/</div>
        <div>{monster.stats.health}</div>
      </div>
      <div>
        {turn === monster.name && (
          <MoveSet
            monster={monster}
            setBattleLog={setBattleLog}
            moves={monster.move_set}
            setTurn={setTurn}
            opponent={opponent}
            setOpponentTeam={setOpponentTeam}
            setMyTeam={setMyTeam}
          />
        )}
      </div>
    </div>
  );
}
