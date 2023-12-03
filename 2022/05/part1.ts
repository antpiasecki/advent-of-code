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
  if (amount == 0) {
    return;
  }

  stacks[to - 1].push(stacks[from - 1].pop()!);
  amount--;
  move(from, to, amount);
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
