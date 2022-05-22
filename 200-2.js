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
	let res = 0;
	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++)
			if (grid[i][j] === "1") {
				res++;
				visit(i, j);
			}

	return res;
};
