/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
	let i = -1,
		dist = 1;
	const m = maze.length,
		n = maze[0].length,
		dir = [
			[1, 0],
			[-1, 0],
			[0, 1],
			[0, -1],
		],
		bfs = [entrance, null],
		isBorder = (i, j) => !i || !j || i === m - 1 || j === n - 1;
	maze[entrance[0]][entrance[1]] = 0;
	while (++i < bfs.length) {
		if (!bfs[i]) {
			dist++;
			bfs.length > i + 1 && bfs.push(null);
			continue;
		}
		for (let [x, y] of dir) {
			x += bfs[i][0];
			y += bfs[i][1];
			if (x > -1 && y > -1 && x < m && y < n && maze[x][y] === ".") {
				if (isBorder(x, y)) return dist;
				maze[x][y] = 0;
				bfs.push([x, y]);
			}
		}
	}
	return -1;
};
console.log(
	nearestExit(
		[
			["+", ".", "+", "+", "+", "+", "+"],
			["+", ".", "+", ".", ".", ".", "+"],
			["+", ".", "+", ".", "+", ".", "+"],
			["+", ".", ".", ".", "+", ".", "+"],
			["+", "+", "+", "+", "+", ".", "+"],
		],
		[0, 1]
	)
);
