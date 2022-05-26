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
			/// ex n=3, (1<<3)-1= 1000 - 1 = 111 => all nodes visited
			if (visited === (1 << n) - 1) return 0;
			const key = node + "," + visited;
			if (memo[key]) return memo[key];
			let shortest = inf;
			for (let i = 0; i < n; i++)
				if (!((1 << i) & visited))
					shortest = Math.min(
						shortest,
						dist[node][i] + visit(i, (1 << i) | visited) // ex n=3, let's say 0 is visited 001 and we will visit 2 (1<<2=100) => 100|001=101 0 and 2 are visited
					);
			memo[key] = shortest;
			return shortest;
		};
	// Floyd-Warshall
	for (let i = 0; i < n; i++) {
		dist[i][i] = 0;
		for (const edge of graph[i]) dist[i][edge] = 1;
	}

	for (let k = 0; k < n; k++)
		for (let i = 0; i < n; i++)
			for (let j = 0; j < n; j++)
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
	//
	let res = inf;
	//find shortest path starting from each node, chose min among them
	for (let i = 0; i < n; i++) res = Math.min(res, visit(i, 1 << i));
	return res;
};
shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]);
