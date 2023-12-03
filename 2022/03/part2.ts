import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
const lines = data.trim().split("\n");
let sum = 0;

for (let i = 0; i < lines.length; i += 3) {
  const seen1: Record<string, boolean> = {};
  for (const c of lines[i]) seen1[c] = true;

  const seen2: Record<string, boolean> = {};
  for (const c of lines[i + 1]) seen2[c] = true;

  const seen3: Record<string, boolean> = {};
  for (const c of lines[i + 2]) seen3[c] = true;

  for (const c of Object.keys(seen1)) {
    if (c in seen2 && c in seen3) {
      if (/[a-z]/.test(c)) sum += c.charCodeAt(0) - 96;
      else sum += c.charCodeAt(0) - 38;
    }
  }
}

console.log(sum);
