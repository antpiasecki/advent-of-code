import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();

const lines = data.trim().split("\n");

function getEntireNumber(x: number, y: number): number {
  while (/\d/.test(lines[y][x - 1])) {
    x--;
  }

  let number = lines[y][x];
  while (/\d/.test(lines[y][x + 1])) {
    x++;
    number += lines[y][x];
  }
  return parseInt(number);
}

function findNumbersAround(x: number, y: number): number[] {
  const found: number[] = [];

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (lines[y + dy] === undefined || lines[y + dy][x + dx] === undefined) {
        continue;
      }

      if (/\d/.test(lines[y + dy][x + dx])) {
        const number = getEntireNumber(x + dx, y + dy);
        if (!found.includes(number)) {
          found.push(number);
        }
      }
    }
  }

  return found;
}

let sum = 0;

for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[y].length; x++) {
    if (lines[y][x] === "*") {
      const numbers = findNumbersAround(x, y);

      if (numbers.length == 2) {
        sum += numbers[0] * numbers[1];
      }
    }
  }
}

console.log(sum);
