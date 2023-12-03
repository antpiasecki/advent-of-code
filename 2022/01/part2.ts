import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
let elfs = [];

for (const elf of data.trim().split("\n\n")) {
  elfs.push(elf.split("\n").map((x) => parseInt(x)).reduce((a, b) => a + b));
}

elfs = elfs.sort().reverse();
console.log(elfs[0] + elfs[1] + elfs[2]);
