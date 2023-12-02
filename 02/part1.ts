import { readFileSync } from "node:fs";

type CubeSet = Record<string, number>;

type Game = {
  id: number;
  sets: CubeSet[];
};

function parseInput(): Game[] {
  const data = readFileSync("input.txt").toString();
  const out: Game[] = [];

  for (const line of data.trim().split("\n")) {
    const parts = line.split(": ");

    const sets: CubeSet[] = [];
    for (const setData of parts[1].split("; ")) {
      const set: CubeSet = {};
      for (const cubes of setData.split(", ")) {
        const cubesParts = cubes.split(" ");
        set[cubesParts[1]] = parseInt(cubesParts[0]);
      }
      sets.push(set);
    }

    const game: Game = {
      id: parseInt(parts[0].split(" ")[1]),
      sets: sets,
    };
    out.push(game);
  }

  return out;
}

const games = parseInput();
let answer = 0;

for (const game of games) {
  let valid = true;
  for (const set of game.sets) {
    if (set["red"] > 12 || set["green"] > 13 || set["blue"] > 14) {
      valid = false;
    }
  }

  if (valid) {
    answer += game.id;
  }
}

console.log(answer);
