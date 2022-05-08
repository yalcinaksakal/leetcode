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
		deleteFromUnvisited = (i, j) => {
			unvisited.splice(
				unvisited.findIndex(el => el[0] === i && el[1] === j),
				1
			);
		},
		add = (i, j, val) => {
			let low = 0,
				high = unvisited.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (dijkstra[unvisited[mid][0] + "," + unvisited[mid][1]] > val)
					low = mid + 1;
				else high = mid;
			}
			if (
				low === unvisited.length - 1 &&
				val < dijkstra[unvisited[low][0] + "," + unvisited[low][1]]
			)
				low++;
			unvisited.splice(low, 0, [i, j]);
		},
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
			if (dijkstra[nKey] === undefined || dijkstra[nKey] > effort) {
				if (!visited[nKey] && added[nKey]) {
					deleteFromUnvisited(ni, nj);
					added[nKey] = false;
				}
				dijkstra[nKey] = effort;
			}
			if (!visited[nKey] && !added[nKey]) {
				add(ni, nj, dijkstra[nKey]);
				added[nKey] = true;
			}
		}
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
