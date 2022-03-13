import React, { useState } from "react";
import Monster from "../components/Monster";
import { team1, team2 } from "../pokemon/pokemon";

export default function BattleArena() {
  const [turn, setTurn] = useState(
    team1[0].stats.speed > team2[0].stats.speed ? team1[0].name : team2[0].name
  );
  const [leftTeam, setLeftTeam] = useState({
    inBattle: 0,
    party: team1,
  });
  const [rightTeam, setRightTeam] = useState({
    inBattle: 0,
    party: team2,
  });
  const [battleLog, setBattleLog] = useState([]);
  console.log(battleLog)

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {console.log(leftTeam, rightTeam)}
        <Monster
          monster={leftTeam.party[leftTeam.inBattle]}
          setTurn={setTurn}
          turn={turn}
          battleLog={battleLog}
          setBattleLog={setBattleLog}
          opponent={rightTeam.party[rightTeam.inBattle]}
          setOpponentTeam={setRightTeam}
          setMyTeam={setLeftTeam}
        />
        <Monster
          monster={rightTeam.party[rightTeam.inBattle]}
          setTurn={setTurn}
          turn={turn}
          battleLog={battleLog}
          setBattleLog={setBattleLog}
          opponent={leftTeam.party[leftTeam.inBattle]}
          setOpponentTeam={setLeftTeam}
          setMyTeam={setRightTeam}
        />
      </div>
      {battleLog.length > 0 && (
        <div style={{ margin: "3rem", border: "1px solid black" }}>
          <h2>Battle Log</h2>
          {battleLog.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
      )}
    </div>
  );
}
