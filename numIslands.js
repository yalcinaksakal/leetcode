/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	const visit = (i, j) => {
		if (!grid[i]) return;
		if (!grid[i][j] || grid[i][j] == 0) return;
		grid[i][j] = 0;
		[
			[i + 1, j],
			[i - 1, j],
			[i, j + 1],
			[i, j - 1],
		].forEach(dir => visit(...dir));
	};
	let res = 0;
	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++)
			if (grid[i][j] == 1) {
				res++;
				visit(i, j);
			}

	return res;
};
numIslands([
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"],
]);
