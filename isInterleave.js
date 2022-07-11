/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	if (s1.length + s2.length !== s3.length) return false;
	const dp = {};
	for (let i = 0; i <= s1.length + 1; i++) dp[i] = {};
	dp[s1.length][s2.length] = true;

	for (let i = s1.length; i > -1; i--)
		for (let j = s2.length; j > -1; j--)
			((s1[i] === s3[i + j] && dp[i + 1][j]) ||
				(s2[j] === s3[i + j] && dp[i][j + 1])) &&
				(dp[i][j] = true);

	return !!dp[0][0];
};
isInterleave("aabcc", "dbbca", "aadbbcbcac");
