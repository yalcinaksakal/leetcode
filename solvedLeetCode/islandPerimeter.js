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
		],
		visited = {};

	let per = 0;

	const isValid = (i, j) =>
		i == -1 || j == -1 || i == m || j == n || !grid[i][j] ? false : true;

	const count = (i, j) => {
		if (visited[i + "," + j]) return;
		visited[i + "," + j] = 1;
		const neighbours = [];
		for (const [x, y] of dir)
			isValid(i + x, j + y) && neighbours.push([i + x, j + y]);

		per += 4 - neighbours.length;

		for (const [x, y] of neighbours) count(x, y);
	};

	for (let i = 0; i < m; i++)
		for (let j = 0; j < n; j++) {
			if (grid[i][j]) {
				count(i, j);
				return per;
			}
		}
};

console.log(
	islandPerimeter([
		[0, 1, 0, 0],
		[1, 1, 1, 0],
		[0, 1, 0, 0],
		[1, 1, 0, 0],
	])
);
