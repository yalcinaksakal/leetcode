/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
	const moves = [
			[-2, 1],
			[-1, 2],
			[1, 2],
			[2, 1],
			[2, -1],
			[1, -2],
			[-1, -2],
			[-2, -1],
		],
		dp = {};
	const isPos = (i, j) => (i < 0 || j < 0 || i >= n || j >= n ? false : true);

	const calcPossiblity = (i, j, k) => {
		if (!k) return 1;
		const key = i + "," + j + "." + k;
		if (dp[key]) return dp[key];
		let next = 0;
		for (const [x, y] of moves)
			isPos(i + x, j + y) && (next += calcPossiblity(i + x, j + y, k - 1));
		dp[key] = next / 8;
		return dp[key];
	};
	return calcPossiblity(row, column, k);
};
