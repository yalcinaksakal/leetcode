/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 */
var dieSimulator = function (n, rollMax) {
	const dp = Array(n + 1)
			.fill()
			.map(() => Array(6).fill(0)),
		mod = 10 ** 9 + 7;

	for (let i = 0; i < 6; i++)
		for (let l = 1; l <= Math.min(n, rollMax[i]); l++) dp[l][i]++;

	for (let i = 1; i < n; i++)
		for (let prv = 0; prv < 6; prv++)
			for (let nxt = 0; nxt < 6; nxt++) {
				if (prv == nxt) continue;
				for (let l = 1; l <= rollMax[nxt] && i + l <= n; l++)
					dp[i + l][nxt] = (dp[i + l][nxt] + dp[i][prv]) % mod;
			}

	let res = 0;
	for (let i = 0; i < 6; i++) res = (res + dp[n][i]) % mod;
	return res;
};
console.log(dieSimulator(3, [2, 1, 1, 0, 0, 0]));
//Errichto's solution
//        [2,1,1,0,0,0]
// length  1 2 3 4 5 6
//    0    0 0 0 0 0 0
//    1    1 1 1 0 0 0  => for length 1, 3 possibilities
//    2    3 2 2 0 0 0  => 7
//    3    6 5 5 0 0 0  => 16
