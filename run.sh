#!/bin/bash

day() {
    cd $1/$2/
    echo "=== Day $2 ==="
    deno run --allow-read=input.txt part1.ts
    deno run --allow-read=input.txt part2.ts
    cd ../..
}

day 2022 01
day 2022 02
day 2022 03
day 2022 04
day 2022 05
day 2022 06
day 2023 01
day 2023 02
day 2023 03