/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
	const m = obstacleGrid.length,
		n = obstacleGrid[0].length,
		paths = Array(m)
			.fill()
			.map(() => Array(n).fill(0));
	paths[0][0] = 1 - obstacleGrid[0][0];
	//fill first row
	for (let i = 1; i < n; i++)
		paths[0][i] = obstacleGrid[0][i] ? 0 : paths[0][i - 1];
	//fill first column
	for (let i = 1; i < m; i++)
		paths[i][0] = obstacleGrid[i][0] ? 0 : paths[i - 1][0];

	for (let i = 1; i < m; i++)
		for (let j = 1; j < n; j++)
			paths[i][j] = obstacleGrid[i][j] ? 0 : paths[i - 1][j] + paths[i][j - 1];
	console.log(paths[m - 1][n - 1]);
	return paths[m - 1][n - 1];
};

uniquePathsWithObstacles([
	[0, 0, 0],
	[1, 0, 0],
	[0, 0, 0],
]);
