/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	const visit = (i, j) => {
		if (!grid[i] || !grid[i][j] || grid[i][j] === "0") return;
		grid[i][j] = 0;
		visit(i + 1, j);
		visit(i - 1, j);
		visit(i, j + 1);
		visit(i, j - 1);
	};
	return grid.reduce(
		(acc, row, i) =>
			acc +
			row.reduce((acc, cell, j) => {
				if (cell === "1") {
					visit(i, j);
					return acc + 1;
				}
				return acc;
			}, 0),
		0
	);
};
