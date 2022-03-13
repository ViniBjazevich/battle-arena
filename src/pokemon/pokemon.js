const team1 = [
  {
    name: "Lizard",
    level: 50,
    health: 153,
    type: null,
    stats: {
      health: 153,
      physical_attack: 104,
      physical_defense: 98,
      special_attack: 129,
      special_defense: 105,
      speed: 120,
    },
    move_set: [
      {
        name: "bite",
        technique: "physical_attack",
        power: 40,
        priority: false,
        buffs: false,
      },
      {
        name: "reptile blast",
        technique: "special_attack",
        power: 50,
        priority: false,
        buffs: false,
      },
      {
        name: "rest",
        technique: "magic",
        power: 0,
        priority: false,
        buffs: {
          health: 0.5,
        },
      },
      {
        name: "focus",
        technique: "magic",
        power: 0,
        priority: false,
        buffs: {
          attack: 0.25,
          defense: 0.25,
        },
      },
    ],
  },
];

const team2 = [
  {
    name: "Squid",
    level: 50,
    health: 154,
    type: null,
    stats: {
      health: 154,
      physical_attack: 103,
      physical_defense: 120,
      special_attack: 105,
      special_defense: 125,
      speed: 98,
    },
    move_set: [
      {
        name: "drown",
        technique: "special_attack",
        power: 40,
        priority: false,
        buffs: false,
      },
      {
        name: "sqeeze",
        technique: "physical_attack",
        power: 50,
        priority: false,
        buffs: false,
      },
      {
        name: "rest",
        technique: "magic",
        power: 40,
        priority: false,
        buffs: {
          health: 0.5,
        },
      },
      {
        name: "focus",
        technique: "magic",
        power: 40,
        priority: false,
        buffs: {
          attack: 0.25,
          defense: 0.25,
        },
      },
    ],
  },
];

module.exports = {
  team1,
  team2
};
