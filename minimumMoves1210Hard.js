/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
	const bfs = [[0, 1, 0], null],
		n = grid.length,
		dir = [
			[
				//horizantal
				[0, 1, 1], //right => h
				[1, -1, 3], //rotate clockwise => v
				[1, 0, 5], //jump down i j-1 => h
			],
			[
				//vertical
				[1, 0, 2], //down => v
				[-1, 1, 4], //rotate counter clockwise => h
				[0, 1, 6], //jump right i-1 j => v
			],
		],
		hor = [1, 4, 5],
		visited = {},
		canVisit = (i, j, dir) =>
			dir < 3
				? true
				: dir === 3
				? j + 1 !== n && !grid[i][j + 1]
				: dir === 4
				? i + 1 !== n && !grid[i + 1][j]
				: dir === 5
				? j && !grid[i][j - 1]
				: i && !grid[i - 1][j],
		visit = (i, j, d) => {
			const isVer = hor.includes(d) ? 0 : 1;
			const key = i + "," + j + "," + isVer;
			if (
				i === n ||
				j === n ||
				i === -1 ||
				j === -1 ||
				visited[key] ||
				grid[i][j] ||
				!canVisit(i, j, d)
			)
				return false;
			visited[key] = true;
			bfs.push([i, j, isVer]);
			return i === n - 1 && j === n - 1 && !isVer;
		};
	let dist = 1,
		i = -1;
	visited["0,1,0"] = true;
	while (++i < bfs.length) {
		if (!bfs[i]) {
			dist++;
			if (i + 1 < bfs.length) bfs.push(null);
			continue;
		}
		for (const [x, y, d] of dir[bfs[i][2]])
			if (visit(bfs[i][0] + x, bfs[i][1] + y, d)) {
				return dist;
			}
	}
	return -1;
};
console.log(
	minimumMoves([
		[0, 0, 0, 0, 0, 1],
		[1, 1, 0, 0, 1, 0],
		[0, 0, 0, 0, 1, 1],
		[0, 0, 1, 0, 1, 0],
		[0, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 0, 0],
	])
);
