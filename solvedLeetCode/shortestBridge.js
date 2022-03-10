/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
	const m = grid.length,
		n = grid[0].length,
		dir = [
			[0, 1],
			[0, -1],
			[1, 0],
			[-1, 0],
		],
		check = (x, y) => x > -1 && y > -1 && x < m && y < n,
		getFirstIsland = () => {
			for (let i = 0; i < m; i++)
				for (let j = 0; j < n; j++) if (grid[i][j]) return [i, j];
		},
		markFirstIsland = (i, j) => {
			grid[i][j] = -1;
			for (let [x, y] of dir) {
				x += i;
				y += j;
				if (check(x, y) && grid[x][y] === 1) markFirstIsland(x, y);
			}
		};
	markFirstIsland(...getFirstIsland());
	let dist = 1;
	while (true) {
		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++)
				if (grid[i][j] === dist) {
					for (let [x, y] of dir) {
						x += i;
						y += j;
						if (!check(x, y)) continue;
						if (grid[x][y] === -1) return dist - 1;
						if (!grid[x][y] || grid[x][y] > dist + 1) grid[x][y] = dist + 1;
					}
				}
		dist++;
	}
};
shortestBridge([
	[1, 1, 0],
	[1, 0, 0],
	[0, 0, 1],
]);
