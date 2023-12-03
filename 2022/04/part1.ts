import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();

function range(start: number, end: number): number[] {
  return [...Array(end - start + 1).keys()].map((i) => i + start);
}

function containsAll<T>(a1: T[], a2: T[]) {
  for (const e of a2) {
    if (!a1.includes(e)) {
      return false;
    }
  }
  return true;
}

let count = 0;

for (const line of data.trim().split("\n")) {
  const [p1, p2] = line.split(",").map((x) => x.split("-"));

  const r1 = range(parseInt(p1[0]), parseInt(p1[1]));
  const r2 = range(parseInt(p2[0]), parseInt(p2[1]));

  if (containsAll(r1, r2) || containsAll(r2, r1)) {
    count++;
  }
}

console.log(count);
