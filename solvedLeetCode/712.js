/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function (s1, s2) {
	const dp = Array(s1.length + 1)
			.fill()
			.map(() => Array(s2.length + 1).fill(0)),
		getAsciiSum = s => {
			let sum = 0;
			for (let i = 0; i < s.length; i++) sum += s.charCodeAt(i);
			return sum;
		};

	for (let i = s1.length - 1; i > -1; i--)
		for (let j = s2.length - 1; j > -1; j--) {
			dp[i][j] =
				s1[i] === s2[j]
					? dp[i + 1][j + 1] + s1.charCodeAt(i)
					: Math.max(dp[i + 1][j], dp[i][j + 1]);
		}
	return getAsciiSum(s1 + s2) - 2 * dp[0][0];
};
