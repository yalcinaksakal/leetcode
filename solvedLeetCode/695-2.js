/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	let max = 0;
	const count = (i, j) => {
		if (!grid[i] || !grid[i][j]) return 0;
		grid[i][j] = 0;
		return (
			1 + count(i + 1, j) + count(i - 1, j) + count(i, j + 1) + count(i, j - 1)
		);
	};
	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++)
			grid[i][j] && (max = Math.max(max, count(i, j)));
	return max;
};
