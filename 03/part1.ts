import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();

const lines = data.trim().split("\n");

function checkAround(x: number, y: number): boolean {
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (lines[y + dy] === undefined || lines[y + dy][x + dx] === undefined) {
        continue;
      }

      if (/[^\d\.\n]/.test(lines[y + dy][x + dx])) {
        return true;
      }
    }
  }
  return false;
}

let sum = 0;

for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[y].length; x++) {
    if (/\d/.test(lines[y][x])) {
      if (checkAround(x, y)) {
        while (/\d/.test(lines[y][x - 1])) {
          x--;
        }

        let number = lines[y][x];
        while (/\d/.test(lines[y][x + 1])) {
          x++;
          number += lines[y][x];
        }
        sum += parseInt(number);
      }
    }
  }
}

console.log(sum);
