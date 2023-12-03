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
};
const data = readFileSync("input.txt").toString();

let score = 0;
for (const line of data.trim().split("\n")) {
  const [p2, result] = line.split(" ");

  let p1: Choice;

  if (result == "X") {
    score += 0;

    if (choices[p2] == Choice.Rock) p1 = Choice.Scissors;
    else if (choices[p2] == Choice.Paper) p1 = Choice.Rock;
    else p1 = Choice.Paper;
  } else if (result == "Y") {
    score += 3;
    p1 = choices[p2];
  } else {
    score += 6;

    if (choices[p2] == Choice.Rock) p1 = Choice.Paper;
    else if (choices[p2] == Choice.Paper) p1 = Choice.Scissors;
    else p1 = Choice.Rock;
  }

  score += p1 + 1;
}

console.log(score);
