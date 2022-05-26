/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
	const n = graph.length,
		inf = 10 ** 9,
		dist = Array(n)
			.fill()
			.map(() => Array(n).fill(inf)),
		allNodesVisited = (1 << n) - 1, //ex n=3, (1<<3)-1="1000"-1="111"=7
		memo = {},
		visit = (node, visited) => {
			const key = node + "," + visited;
			//if this state was visited, dont repeat the process, return it
			if (memo[key] !== undefined) return memo[key];
			let shortest = inf;
			for (let i = 0; i < n; i++)
				//if node i is not visited (if 1<<i & visted=1, visited ele not visited) skip this node. lets say i=2, visited=10001, 1<<i & visited = 100 & 10001 = 0, node 2 is not visited.
				if (!((1 << i) & visited))
					shortest = Math.min(
						shortest,
						dist[node][i] + visit(i, (1 << i) | visited) // note node as visited. lets say i=2, visited=10001, 1<<i | visited = 100 | 10001 = 10101
					);
			memo[key] = shortest;
			return memo[key];
		};
	//build dist matrix with the given graph
	for (let i = 0; i < n; i++) {
		dist[i][i] = 0;
		for (const neighbour of graph[i]) dist[i][neighbour] = 1;
		//memo[node,visited]: foreach node, for all nodes visited state there is nothing to do, so memo for this key is 0
		memo[i + "," + allNodesVisited] = 0;
	}

	//floyd warshall
	for (let k = 0; k < n; k++)
		for (let i = 0; i < n; i++)
			for (let j = 0; j < n; j++)
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
	//start from each node, find shortest path connecting all nodes, return min of shortest paths

	let res = inf;
	for (let i = 0; i < n; i++) res = Math.min(res, visit(i, 1 << i));
	return res;
};
shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]);
