function calculateDamage(attacker, defender, move) {
  const level = attacker.level;
  let attackStat;
  let defenseStat;

  switch (move.technique) {
    case "physical_attack":
      attackStat = attacker.stats["physical_attack"];
      defenseStat = defender.stats["physical_defense"];
      break;
    case "special_attack":
      attackStat = attacker.stats["special_attack"];
      defenseStat = defender.stats["special_defense"];
      break;
    default:
      attackStat = 0;
      defenseStat = 0;
  }

  const damage =
    (((2 * level) / 5 + 2) * move.power * (attackStat / defenseStat)) / 50 + 2;

  return Math.floor(damage);
}

module.exports = {
  calculateDamage,
};
