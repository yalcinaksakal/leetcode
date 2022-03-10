/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
	const memo = {},
		res = [],
		dfs = node => {
			if (memo[node] !== undefined) return memo[node];
			if (visited[node]) return false;
			visited[node] = true;
			for (const neighbour of graph[node])
				if (!dfs(neighbour)) {
					memo[node] = false;
					return false;
				}
			memo[node] = true;
			return true;
		};
	let visited;
	for (let i = 0; i < graph.length; i++) {
		visited = {};
		dfs(i) && res.push(i);
	}

	return res;
};
eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]);
