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
		markFirstIsland = (i, j) => {
			grid[i][j] = -1;
			for (let [x, y] of dir) {
				x += i;
				y += j;
				grid[x] && grid[x][y] === 1 && markFirstIsland(x, y);
			}
		};
	let dist = 1,
		isFirstIslandFound = false;
	while (true) {
		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++)
				if (grid[i][j] === dist)
					if (isFirstIslandFound)
						for (let [x, y] of dir) {
							x += i;
							y += j;
							if (!grid[x] || grid[x][y] === undefined) continue;
							if (grid[x][y] === -1) return dist - 1;
							(!grid[x][y] || grid[x][y] > dist + 1) && (grid[x][y] = dist + 1);
						}
					else {
						markFirstIsland(i, j);
						isFirstIslandFound = true;
					}
		dist++;
	}
};
shortestBridge([
	[1, 1, 1, 1, 1],
	[1, 0, 0, 0, 1],
	[1, 0, 1, 0, 1],
	[1, 0, 0, 0, 1],
	[1, 1, 1, 1, 1],
]);
