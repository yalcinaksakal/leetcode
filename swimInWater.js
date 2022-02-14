/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
	let next;
	const unvisited = [[0, 0]],
		dijkstra = {},
		visited = {},
		dir = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		],
		m = grid.length,
		n = grid[0].length,
		isValid = (i, j) => i > -1 && i < m && j > -1 && j < n,
		push = (x, y, val, type) => {
			let low = 0,
				mid = 0,
				high = unvisited.length;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (unvisited[mid][2] > val) low = mid + 1;
				else high = mid;
			}
			if (type === "del") {
				let check = false,
					repeat = true;
				while (!check && repeat && low < unvisited.length) {
					repeat = unvisited[low][2] === val;
					check = unvisited[low][0] === x && unvisited[low][1] === y && repeat;
					low++;
				}
				if (check) unvisited.splice(low - 1, 1);
			} else unvisited.splice(low, 0, [x, y, val]);
		},
		setVal = (x, y, val) => {
			const key = `${x},${y}`,
				old = dijkstra[key];
			dijkstra[key] = val;
			if (visited[key]) return;
			if (old != undefined) push(x, y, old, "del");
			push(x, y, val);
		},
		visit = (x, y) => {
			let val, key;
			for (const [i, j] of dir)
				if (isValid(x + i, y + j)) {
					val = Math.max(dijkstra[`${x},${y}`], grid[x + i][y + j]);
					key = x + i + "," + (y + j);
					if (dijkstra[key] === undefined || dijkstra[key] > val)
						setVal(x + i, y + j, val);
				}
		};
	dijkstra[0 + "," + 0] = grid[0][0];
	while (unvisited.length) {
		next = unvisited.pop();
		visited[next[0] + "," + next[1]] = true;
		visit(...next);
	}
	return dijkstra[m - 1 + "," + (n - 1)];
};
swimInWater([
	[0, 2],
	[1, 3],
]);
