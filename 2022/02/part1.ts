import { readFileSync } from "node:fs";

enum Choice {
  Rock,
  Paper,
  Scissors,
}

const choices: Record<string, Choice> = {
  "A": Choice.Rock,
  "B": Choice.Paper,
  "C": Choice.Scissors,
  "X": Choice.Rock,
  "Y": Choice.Paper,
  "Z": Choice.Scissors,
};
const data = readFileSync("input.txt").toString();

let score = 0;
for (const line of data.trim().split("\n")) {
  const [p2, p1] = line.split(" ");

  score += choices[p1] + 1;
  if (choices[p1] == choices[p2]) {
    score += 3;
  } else if (choices[p1] == Choice.Paper && choices[p2] == Choice.Rock) {
    score += 6;
  } else if (choices[p1] == Choice.Rock && choices[p2] == Choice.Scissors) {
    score += 6;
  } else if (choices[p1] == Choice.Scissors && choices[p2] == Choice.Paper) {
    score += 6;
  }
}

console.log(score);
