/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
	const n = grid.length,
		newGrid = Array(3 * n)
			.fill()
			.map(() => Array(3 * n).fill(1));
	let x, y;
	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++)
			if (grid[i][j] == "\\" || grid[i][j] == "/") {
				x = 3 * i;
				y = 3 * j;
				for (let k = 0; k < 3; k++)
					newGrid[x + k][y + (grid[i][j] == "/" ? 2 - k : k)] = 0;
			}

	const visit = (i, j) => {
		if (!newGrid[i] || !newGrid[i][j]) return;
		newGrid[i][j] = 0;

		visit(i + 1, j);
		visit(i - 1, j);
		visit(i, j + 1);
		visit(i, j - 1);
	};

	let res = 0;
	for (let i = 0; i < 3 * n; i++)
		for (let j = 0; j < 3 * n; j++)
			if (newGrid[i][j]) {
				res++;
				visit(i, j);
			}

	return res;
};
