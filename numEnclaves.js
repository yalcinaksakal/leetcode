/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
	let res = 0,
		count,
		isBorder;
	const m = grid.length,
		n = grid[0].length,
		visit = (i, j) => {
			if (i < 0 || j < 0 || i === m || j === n) {
				isBorder = true;
				return;
			}
			if (!grid[i][j]) return;
			grid[i][j] = 0;
			count++;
			visit(i + 1, j);
			visit(i - 1, j);
			visit(i, j + 1);
			visit(i, j - 1);
		};

	for (let i = 0; i < grid.length; i++)
		for (let j = 0; j < grid[0].length; j++)
			if (grid[i][j] == 1) {
				count = 0;
				isBorder = false;
				visit(i, j);
				!isBorder && (res += count);
			}

	return res;
};
