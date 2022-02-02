/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
	const m = grid.length,
		n = grid[0].length;
	let sx,
		sy,
		sq = m * n,
		res = 0;

	const walk = (i, j, step = 1) => {
		if (i < 0 || j < 0 || i == m || j == n || grid[i][j] == -1) return;
		if (grid[i][j] == 2) {
			if (step == sq) res++;
			return;
		}
		grid[i][j] = -1;
		walk(i, j + 1, step + 1);
		walk(i + 1, j, step + 1);
		walk(i, j - 1, step + 1);
		walk(i - 1, j, step + 1);
		grid[i][j] = 0;
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			if (grid[i][j] == 1) (sx = i), (sy = j);
			else if (grid[i][j] == -1) sq--;

	walk(sx, sy);

	return res;
};
