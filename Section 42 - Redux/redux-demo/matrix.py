import random

n = int(input("n: "))

old_l = []

for i in range(n**2):
    old_l.append(i + 1)

l = []

while (len(old_l) > 0):
    r = random.randint(0, len(old_l) - 1)
    l.append(old_l[r])
    del old_l[r]

m = []

for i in range(n):
    m.append([])
    for j in range(n):
        m[i].append(l[i * n + j])

for i in range(n):
    print(*m[i])