/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	const m = grid.length,
		n = grid[0].length;

	let max = 0;

	const count = (i, j) => {
		if (i < 0 || j < 0 || i >= m || j >= n || !grid[i][j]) return 0;

		grid[i][j] = 0;

		return (
			1 + count(i + 1, j) + count(i - 1, j) + count(i, j + 1) + count(i, j - 1)
		);
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++)
			if (grid[i][j]) max = Math.max(max, count(i, j));

	return max;
};
