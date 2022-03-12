const pokemon = [
  {
    name: "Lizard",
    stats: {
      health: 88,
      attack: 43,
      defense: 92,
      special_attack: 23,
      special_defense: 44,
      speed: 99,
    },
    move_set: {
      bite: {
        power: 40,
        priority: false,
        buffs: false,
      },
      "tail slap": {
        power: 50,
        priority: false,
        buffs: false,
      },
      rest: {
        power: 40,
        priority: false,
        buffs: {
          health: 0.5,
        },
      },
      focus: {
        power: 40,
        priority: false,
        buffs: {
          attack: 0.25,
          defense: 0.25,
        },
      },
    },
  },
  {
    name: "Squid",
    stats: {
      health: 88,
      attack: 43,
      defense: 92,
      special_attack: 23,
      special_defense: 44,
      speed: 99,
    },
    move_set: {
      squeeze: {
        power: 40,
        priority: false,
        buffs: false,
      },
      drown: {
        power: 60,
        priority: false,
        buffs: false,
      },
      rest: {
        power: 40,
        priority: false,
        buffs: {
          health: 0.5,
        },
      },
      focus: {
        power: 40,
        priority: false,
        buffs: {
          attack: 0.25,
          defense: 0.25,
        },
      },
    },
  },
];

module.exports = pokemon;
