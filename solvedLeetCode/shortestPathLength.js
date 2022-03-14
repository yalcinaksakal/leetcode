/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
	const inf = 10 ** 9,
		n = graph.length,
		dist = Array(n)
			.fill()
			.map(() => Array(n).fill(inf)),
		memo = {},
		visit = (node, visited) => {
			if (visited === (1 << n) - 1) return 0;
			if (memo[node + "," + visited]) return memo[node + "," + visited];
			let shortest = inf;
			for (let i = 0; i < n; i++)
				if (!((1 << i) & visited))
					shortest = Math.min(
						shortest,
						dist[node][i] + visit(i, (1 << i) | visited)
					);
			memo[node + "," + visited] = shortest;
			return shortest;
		};

	for (let i = 0; i < n; i++) {
		dist[i][i] = 0;
		for (const edge of graph[i]) dist[i][edge] = 1;
	}

	for (let k = 0; k < n; k++)
		for (let i = 0; i < n; i++)
			for (let j = 0; j < n; j++)
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);

	let res = inf;
	for (let i = 0; i < n; i++) res = Math.min(res, visit(i, 1 << i));
	return res;
};
