/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	const n = isConnected.length,
		roots = Array(n)
			.fill()
			.map((_, i) => i),
		find = v => {
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => (roots[find(u)] = roots[find(v)]),
		provinces = {};
	for (let i = 0; i < n; i++)
		for (let j = i + 1; j < n; j++) isConnected[i][j] && union(i, j);
	for (let i = 0; i < n; i++) provinces[find(i)] = true;
	return Object.keys(provinces).length;
};
findCircleNum([
	[1, 0, 0, 1],
	[0, 1, 1, 0],
	[0, 1, 1, 1],
	[1, 0, 1, 1],
]);
