import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
const elfs = [];

for (const elf of data.trim().split("\n\n")) {
  elfs.push(elf.split("\n").map((x) => parseInt(x)).reduce((a, b) => a + b));
}

console.log(Math.max(...elfs));
