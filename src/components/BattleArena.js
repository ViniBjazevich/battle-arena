import React, { useState } from "react";
import Monster from "../components/Monster";
import monsterData from "../pokemon/pokemon";

export default function BattleArena() {
  const [turn, setTurn] = useState(
    monsterData[0].stats.speed > monsterData[1].stats.speed
      ? monsterData[0].name
      : monsterData[1].name
  );
  const [battleLog, setBattleLog] = useState([]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {monsterData.map((monster, index) => (
          <Monster
            monster={monster}
            key={monster.name}
            setTurn={setTurn}
            turn={turn}
            battleLog={battleLog}
            setBattleLog={setBattleLog}
            opponent={monsterData[index === 0 ? 1 : 0]}
          />
        ))}
      </div>
      {battleLog.length > 0 && <div style={{ margin: '3rem', border: '1px solid black' }}>
        <h2>Battle Log</h2>
        {battleLog.map((log, index) =>
          <div key={index}>
            {log.name}
          </div>
        )}
      </div>}
    </div>
  );
}
