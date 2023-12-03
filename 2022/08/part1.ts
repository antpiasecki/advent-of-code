import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
const lines = data.trim().split("\n");

function isVisible(x: number, y: number): boolean {
  let visibleFromLeft = true;
  for (let i = 1; i < 100; i++) {
    if (lines[y] === undefined) continue;

    if (lines[y][x - i] >= lines[y][x]) {
      visibleFromLeft = false;
      break;
    }
  }

  let visibleFromRight = true;
  for (let i = 1; i < 100; i++) {
    if (lines[y] === undefined) continue;

    if (lines[y][x + i] >= lines[y][x]) {
      visibleFromRight = false;
      break;
    }
  }

  let visibleFromUp = true;
  for (let i = 1; i < 100; i++) {
    if (lines[y - i] === undefined) continue;

    if (lines[y - i][x] >= lines[y][x]) {
      visibleFromUp = false;
      break;
    }
  }

  let visibleFromDown = true;
  for (let i = 1; i < 100; i++) {
    if (lines[y + i] === undefined) continue;

    if (lines[y + i][x] >= lines[y][x]) {
      visibleFromDown = false;
      break;
    }
  }

  return visibleFromLeft || visibleFromRight || visibleFromUp ||
    visibleFromDown;
}

let visible = 0;
for (let y = 0; y < lines.length; y++) {
  for (let x = 0; x < lines[0].length; x++) {
    if (isVisible(x, y)) {
      visible++;
    }
  }
}
console.log(visible);
