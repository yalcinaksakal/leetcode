/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (text1, text2) {
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

	return text1.length + text2.length - 2 * dp[0][0];
};
