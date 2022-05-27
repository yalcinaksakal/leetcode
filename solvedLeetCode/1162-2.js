/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
	let dist = 1,
		maxDist = 0,
		canContinue = true;

	const m = grid.length,
		n = grid[0].length,
		dir = [
			//[i,j,dist]
			[0, 1, 1],
			[0, -1, 1],
			[1, 0, 1],
			[-1, 0, 1],
			[-1, -1, 2],
			[-1, 1, 2],
			[1, -1, 2],
			[1, 1, 2],
		];
	while (canContinue) {
		canContinue = false;
		for (let i = 0; i < m; i++)
			for (let j = 0; j < n; j++) {
				if (grid[i][j] === dist) {
					canContinue = true;
					for (let [x, y, d] of dir) {
						x += i;
						y += j;
						d += grid[i][j];
						if (
							grid[x] &&
							grid[x][y] !== undefined &&
							(!grid[x][y] || grid[x][y] > d)
						)
							grid[x][y] = d;
					}
				}
			}
		dist++;
	}
	maxDist = grid.reduce((acc, cur) => Math.max(acc, ...cur), 0) - 1;
	return maxDist < 1 ? -1 : maxDist;
};
maxDistance([
	[1, 1, 1],
	[1, 1, 1],
	[1, 1, 1],
]);
