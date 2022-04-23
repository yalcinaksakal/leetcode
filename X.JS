/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
	const m = dungeon.length,
		n = dungeon[0].length,
		dp = Array(m + 1)
			.fill()
			.map(r => Array(n + 1).fill(10 ** 9));
	dp[m - 1][n] = 1;
	dp[m][n - 1] = 1;
	for (let i = m - 1; i > -1; i--)
		for (let j = n - 1; j > -1; j--) {
			dp[i][j] = Math.max(
				Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j],
				1
			);
		}

	return dp[0][0];
};
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP1 = function (dungeon) {
	const m = dungeon.length,
		n = dungeon[0].length,
		dp = {};
	let min;

	for (let i = m - 1; i > -1; i--) {
		dp[i] = {};
		for (let j = n - 1; j > -1; j--) {
			if (i === m - 1 && j === n - 1) min = 1;
			else if (i === m - 1) min = dp[i][j + 1];
			else if (j === n - 1) min = dp[i + 1][j];
			else min = Math.min(dp[i + 1][j], dp[i][j + 1]);
			dp[i][j] = Math.max(min - dungeon[i][j], 1);
		}
	}
	return dp[0][0];
};
calculateMinimumHP([
	[1, -3, 3],
	[0, -2, 0],
	[-3, -3, -3],
]);
