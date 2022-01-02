/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
	const map = {},
		directions = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		],
		mod = 10 ** 9 + 7;

	const getPaths = (x, y, moves) => {
		if (x < 0 || x >= m || y >= n || y < 0) return 1;
		if (!moves) return 0;
		if (map[[x, y, moves]]) return map[[x, y, moves]];

		let res = 0;

		for (const [i, j] of directions)
			res = (res + getPaths(x + i, y + j, moves - 1)) % mod;

		map[[x, y, moves]] = res;

		return res;
	};
	const res = getPaths(startRow, startColumn, maxMove);
	console.log(map, res);
	return res;
};

findPaths(3, 2, 10, 2, 1);
