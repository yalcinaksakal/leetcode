/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
	const dp = {};
	for (let i = -1; i < s.length; i++) {
		dp[i] = {};
		for (let j = -1; j < p.length; j++) dp[i][j] = false;
	}
	dp[-1][-1] = true;

	for (let i = 0; i < p.length; i++)
		if (p[i] === "*") dp[-1][i] = dp[-1][i - 1];

	for (let i = 0; i < s.length; i++)
		for (let j = 0; j < p.length; j++)
			if (s[i] === p[j] || p[j] === "?") dp[i][j] = dp[i - 1][j - 1];
			else if (p[j] === "*") dp[i][j] = dp[i][j - 1] || dp[i - 1][j];

	return dp[s.length - 1][p.length - 1];
};

console.log(isMatch("aa", "*"));
