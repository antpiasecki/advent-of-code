import { readFileSync } from "node:fs";

const stacks: string[][] = [
  "GDVZJSB".split(""),
  "ZSMGVP".split(""),
  "CLBSWTQF".split(""),
  "HJGWMRVQ".split(""),
  "CLSNFMD".split(""),
  "RGCD".split(""),
  "HGTRJDSQ".split(""),
  "PFV".split(""),
  "DRSTJ".split(""),
];

const data = readFileSync("input.txt").toString().split("\n\n")[1];

function move(from: number, to: number, amount: number) {
  const tmp = [];

  for (let i = 0; i < amount; i++) {
    tmp.unshift(stacks[from - 1].pop()!);
  }

  stacks[to - 1] = stacks[to - 1].concat(tmp);
}

for (const line of data.trim().split("\n")) {
  const parts = line.split(" ");
  move(parseInt(parts[3]), parseInt(parts[5]), parseInt(parts[1]));
}

let answer = "";
for (const stack of stacks) {
  answer += stack.pop()!;
}

console.log(answer);
