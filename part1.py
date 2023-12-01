answer = 0

for l in open("input.txt").readlines():
    digits = [c for c in l if c.isdigit()]
    answer += int(digits[0] + digits[-1])

print(answer)
