def gate(times):
    if not times:
        return 0
        
    res = 0
    for i in range(len(times)):
        start = times[i][0]
        val = 0
        for j in range(len(times)):
            left, right = times[j][0], times[j][1]
            if left<=start<right:
                val += 1
        res = max(res, val)
    return res

input=[[9,11],[10,12],[10,13],[12,14]]

result = gate(input)
print(result)