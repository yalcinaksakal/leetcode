/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	const dp = Array(text1.length + 1)
		.fill()
		.map(() => Array(text2.length + 1).fill(0));

	for (let i = text1.length - 1; i > -1; i--)
		for (let j = text2.length - 1; j > -1; j--) {
			dp[i][j] =
				text1[i] === text2[j]
					? dp[i + 1][j + 1] + 1
					: Math.max(dp[i + 1][j], dp[i][j + 1]);
		}

	return dp[0][0];
};

//rec o(2**number of non equal chars) , does not work
var longestCommonSubsequenceRec = function (text1, text2) {
	const dfs = (i, j) => {
		if (i >= text1.length || j >= text2.length) return 0;
		if (text1[i] === text2[j]) return 1 + dfs(i + 1, j + 1);
		return Math.max(dfs(i + 1, j), dfs(i, j + 1));
	};
	dfs(0, 0);
};
console.log(longestCommonSubsequence("abcde", "ace"));
