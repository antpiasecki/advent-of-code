import { readFileSync } from "node:fs";

const data = readFileSync("input.txt").toString();
let sum = 0;

for (const line of data.trim().split("\n")) {
  const digits = line.split("").filter((x) => /\d/.test(x));
  sum += parseInt(digits[0] + digits[digits.length - 1]);
}

console.log(sum);
