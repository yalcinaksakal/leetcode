/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
	let n = grid[0].length,
		res = 0;

	for (let i = 0; i < n; ++i) {
		let rowMax = 0,
			colMax = 0;
		for (let j = 0; j < n; ++j) {
			if (grid[i][j] > 0) ++res;
			rowMax = Math.max(rowMax, grid[i][j]);
			colMax = Math.max(colMax, grid[j][i]);
		}
		res += rowMax + colMax;
	}
	return res;
};
