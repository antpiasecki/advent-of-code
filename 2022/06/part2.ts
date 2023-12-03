import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString().trim();

for (let i = 0; i < data.length; i++) {
  const chars = data.slice(i, i + 14);

  // if there are no duplicates
  if (chars.length === [...new Set(chars)].length) {
    console.log(i + 14);
    break;
  }
}
