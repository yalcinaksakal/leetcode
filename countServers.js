/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
	const row = {},
		col = {};
	let res = 0;
	for (let r = 0; r < grid.length; r++)
		for (let c = 0; c < grid[0].length; c++)
			if (grid[r][c]) {
				row[r] ? row[r].count++ : (row[r] = { count: 1, c });
				col[c] ? col[c]++ : (col[c] = 1);
				res++;
			}
	for (const r of Object.keys(row))
		row[r].count === 1 && col[row[r].c] === 1 && res--;

	return res;
};
countServers([
	[1, 0],
	[1, 1],
]);
