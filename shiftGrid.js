/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
	let flat = grid.flat();
	const len = flat.length,
		m = grid[0].length,
		n = grid.length,
		res = [];
	k %= len;
	flat = [...flat.slice(len - k), ...flat.slice(0, len - k)];
	for (let i = 0; i < n; i++) res.push(flat.slice(i * m, i * m + m));
	return res;
};
