/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	const m = word1.length,
		n = word2.length,
		dp = {};

	for (let i = 0; i < m + 1; i++) {
		dp[i] = {};
		dp[i][n] = m - i;
	}
	for (let i = 0; i < n; i++) dp[m][i] = n - i;

	for (let i = m - 1; i > -1; i--)
		for (let j = n - 1; j > -1; j--)
			dp[i][j] =
				word1[i] == word2[j]
					? dp[i + 1][j + 1]
					: Math.min(dp[i + 1][j], dp[i + 1][j + 1], dp[i][j + 1]) + 1;

	return dp[0][0];
};

console.log(minDistance("horse", "ros"));
