/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

//dynamic
var isInterleave = function (s1, s2, s3) {
	if (s1.length + s2.length !== s3.length) return false;
	const dp = Array(s1.length + 1)
		.fill()
		.map(() => Array(s2.length + 1).fill(0));

	dp[s1.length][s2.length] = 1;

	for (let i = s1.length; i > -1; i--)
		for (let j = s2.length; j > -1; j--) {
			if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = 1;
			if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = 1;
		}
	console.log(dp);
	return dp[0][0] === 1;
};

var isInterleaveRec = function (s1, s2, s3) {
	const map = {};

	const dfs = (i, j) => {
		if (i === s1.length && j === s2.length) return true;
		if (map[[i, j]]) return map[[i, j]];

		if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
		if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;

		map[[i, j]] = false;

		return false;
	};

	if (s1.length + s2.length !== s3.length) return false;

	return [dfs(0, 0), map];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
