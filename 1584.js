/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
	const graph = [],
		n = points.length,
		roots = Array(n)
			.fill()
			.map((_, i) => i),
		find = v => {
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => {
			const p1 = find(u),
				p2 = find(v);
			if (p1 !== p2) {
				roots[p2] = roots[p1];
				return true;
			}
			return false;
		},
		getDist = (x, y) =>
			Math.abs(points[x][0] - points[y][0]) +
			Math.abs(points[x][1] - points[y][1]);

	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++) graph.push([getDist(i, j), i, j]);

	graph.sort((a, b) => a[0] - b[0]);

	let res = 0;
	for (const [dist, i, j] of graph) if (union(i, j)) res += dist;

	return res;
};
minCostConnectPoints([
	[2, -3],
	[-17, -8],
	[13, 8],
	[-17, -15],
]);

//1584
