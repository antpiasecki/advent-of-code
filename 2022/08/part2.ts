import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
const lines = data.trim().split("\n");

function countVisible(x: number, y: number): number {
  let left = 0;
  for (let i = 1; i < 100; i++) {
    if (lines[y] === undefined || lines[y][x - i] === undefined) break;
    if (lines[y][x - i] >= lines[y][x]) {
      left++;
      break;
    }
    left++;
  }

  let right = 0;
  for (let i = 1; i < 100; i++) {
    if (lines[y] === undefined || lines[y][x + i] === undefined) break;
    if (lines[y][x + i] >= lines[y][x]) {
      right++;
      break;
    }
    right++;
  }

  let down = 0;
  for (let i = 1; i < 100; i++) {
    if (lines[y + i] === undefined || lines[y + i][x] === undefined) break;
    if (lines[y + i][x] >= lines[y][x]) {
      down++;
      break;
    }
    down++;
  }

  let up = 0;
  for (let i = 1; i < 100; i++) {
    if (lines[y - i] === undefined || lines[y - i][x] === undefined) break;
    if (lines[y - i][x] >= lines[y][x]) {
      up++;
      break;
    }
    up++;
  }

  return left * right * up * down;
}

let highestScore = 0;

for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[0].length; x++) {
    const score = countVisible(x, y);
    if (score > highestScore) highestScore = score;
  }
}

console.log(highestScore);
