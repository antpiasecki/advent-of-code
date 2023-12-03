#!/bin/bash

day() {
    cd $1/$2/
    echo "=== Day $2 ==="
    deno run --allow-read=input.txt part1.ts
    deno run --allow-read=input.txt part2.ts
    cd ../..
}

day 2023 01
day 2023 02
day 2023 03