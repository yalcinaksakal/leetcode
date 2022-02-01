/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function (houses, k) {
	if (k == houses.length) return 0;
	const getDist = i => {
		const avg = Math.ceil(
			houses.slice(0, i + 1).reduce((a, c) => a + c, 0) / (i + 1)
		);
		return houses.slice(0, i + 1).reduce((a, c) => (a += Math.abs(avg - c)), 0);
	};

	const dp = {};
	for (let i = 0; i < houses.length; i++) {
		dp[i] = {};
		dp[i][1] = getDist(i);
		for (let j = 2; j <= k && j <= i + 1; j++) dp[i][j] = dp[i - 1][j - 1];
	}
	console.log(dp);
};

minDistance([1, 4, 8, 10, 20], 3);
