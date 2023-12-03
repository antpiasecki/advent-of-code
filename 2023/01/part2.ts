import { readFileSync } from "node:fs";

const NUMBERS: Record<string, string> = {
  "zero": "0",
  "one": "1",
  "two": "2",
  "three": "3",
  "four": "4",
  "five": "5",
  "six": "6",
  "seven": "7",
  "eight": "8",
  "nine": "9",
};

function findDigit(line: string, i: number): string | null {
  if (/\d/.test(line[i])) {
    return line[i];
  }

  for (const [k, v] of Object.entries(NUMBERS)) {
    if (line.substring(i, i + k.length) === k) {
      return v;
    }
  }

  return null;
}

const data = readFileSync("input.txt").toString();
let sum = 0;

for (const line of data.trim().split("\n")) {
  let first, last;

  for (let i = 0; i < line.length; i++) {
    const digit = findDigit(line, i);
    if (digit !== null) {
      first = digit;
      break;
    }
  }

  for (let i = line.length - 1; i > 0; i--) {
    const digit = findDigit(line, i);
    if (digit !== null) {
      last = digit;
      break;
    }
  }

  if (last === undefined) {
    last = first;
  }

  sum += parseInt(first! + last);
}

console.log(sum);
