import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
let sum = 0;

for (const line of data.trim().split("\n")) {
  const p1 = line.substring(0, line.length / 2);
  const p2 = line.substring(line.length / 2);

  const seen: Record<string, boolean> = {};

  for (const c of p1) seen[c] = true;

  for (const c of p2) {
    if (c in seen) {
      if (/[a-z]/.test(c)) sum += c.charCodeAt(0) - 96;
      else sum += c.charCodeAt(0) - 38;
      break;
    }
  }
}

console.log(sum);
