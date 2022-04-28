/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
	const m = heights.length,
		n = heights[0].length,
		dijkstra = { [0 + "," + 0]: 0 },
		dir = { 1: [0, 1], 2: [0, -1], 3: [1, 0], 4: [-1, 0] },
		visited = [],
		unvisited = [[0, 0]],
		added = {},
		isvalid = (i, j) => i > -1 && j > -1 && i < m && j < n;
	let ni, nj, effort, key, nKey;
	while (unvisited.length) {
		const [i, j] = unvisited.pop();
		key = i + "," + j;
		visited[key] = true;
		for (let d = 1; d < 5; d++) {
			ni = i + dir[d][0];
			nj = j + dir[d][1];
			if (!isvalid(ni, nj)) continue;
			effort = Math.max(
				dijkstra[key],
				Math.abs(heights[i][j] - heights[ni][nj])
			);
			nKey = ni + "," + nj;
			if (dijkstra[nKey] === undefined || dijkstra[nKey] > effort)
				dijkstra[nKey] = effort;
			if (!visited[nKey] && !added[nKey]) {
				unvisited.push([ni, nj]);
				added[nKey] = true;
			}
		}
		unvisited.sort(
			(a, b) => dijkstra[b[0] + "," + b[1]] - dijkstra[a[0] + "," + a[1]]
		);
	}
	return dijkstra[m - 1 + "," + (n - 1)];
};
console.log(
	minimumEffortPath([
		[1, 2, 2],
		[3, 8, 2],
		[5, 3, 5],
	])
);
