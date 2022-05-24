/**
 * @param {string[]} grid
 * @return {number}
 */

/*
 / = [[110],
      [101],
      [011]]
 \ = [[011],
      [101],
      [110]]
 " "= [[111],
       [111],
       [111]]
 0s are borders
*/
var regionsBySlashes = function (grid) {
	let n = grid.length,
		res = 0;
	const newGrid = Array(3 * n)
			.fill()
			.map(() => Array(3 * n).fill(1)),
		visit = (i, j) => {
			if (!newGrid[i] || !newGrid[i][j]) return;
			newGrid[i][j] = 0;
			visit(i + 1, j);
			visit(i - 1, j);
			visit(i, j + 1);
			visit(i, j - 1);
		};
	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++)
			if (grid[i][j] !== " ") {
				const x = 3 * i,
					y = 3 * j;
				for (let k = 0; k < 3; k++)
					newGrid[x + k][y + (grid[i][j] == "/" ? 2 - k : k)] = 0;
			}
	n *= 3;
	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++)
			if (newGrid[i][j]) {
				res++;
				visit(i, j);
			}
	return res;
};
regionsBySlashes(["/\\", "\\/"]);
