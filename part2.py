answer = 0

NUMBERS = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
}

for line in open("input.txt").read().strip().split("\n"):
    first = None
    last = None

    for i in range(len(line)):
        if line[i].isdigit():
            first = line[i]
            break
        for k in NUMBERS:
            if line[i : i + len(k)] == k:
                first = NUMBERS[k]
                break
        if first is not None:
            break

    for i in range(len(line) - 1, -1, -1):
        if line[i].isdigit():
            last = line[i]
            break
        for k in NUMBERS:
            if line[i : i + len(k)] == k:
                last = NUMBERS[k]
                break
        if last is not None:
            break

    answer += int(str(first) + str(last))

print(answer)
