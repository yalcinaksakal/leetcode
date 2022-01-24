/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
	const m = grid.length,
		n = grid[0].length,
		dir = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		];

	let per = 0;

	const isValid = (i, j) =>
		i == -1 || j == -1 || i == m || j == n || !grid[i][j] ? false : true;

	const count = (i, j) => {
		let neighbours = 0;
		for (const [x, y] of dir) isValid(i + x, j + y) && neighbours++;
		per += 4 - neighbours;
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) if (grid[i][j]) count(i, j);
	return per;
};

console.log(
	islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
);
