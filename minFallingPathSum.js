/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
	const m = matrix.length,
		n = matrix[0].length,
		map = {};

	const dp = (i, j) => {
		if (i >= m) return 0;
		if (map[[i, j]]) return map[[i, j]];

		const children = [];
		for (let y = j - 1; y < j + 2; y++)
			if (y >= 0 && y < n) children.push(dp(i + 1, y));

		const res = matrix[i][j] + Math.min(...children);
		map[[i, j]] = res;
		return res;
	};

	let res = dp(0, 0);

	for (let k = 1; k < n; k++) res = Math.min(res, dp(0, k));

	return res;
};

minFallingPathSum([
	[2, 1, 3],
	[6, 5, 4],
	[7, 8, 9],
]);
