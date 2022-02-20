def legoBlocks(N, M):
    MOD = 1000000007
    row_combinations = [1, 1, 2, 4]
    
    while len(row_combinations) <= M:
        row_combinations.append(sum(row_combinations[-4:]) % MOD)
    
    total = [pow(c, N, MOD) for c in row_combinations]

    unstable = [0, 0]
        
    for i in range(2, M + 1):
        unstable.append(
            sum((total[j] - unstable[j]) * total[i - j] for j in range(1, i)) % MOD)
            
    return ((total[M] - unstable[M]) % MOD)