/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
	const isNodeSafe = {},
		res = [],
		visited = {},
		dfs = node => {
			if (isNodeSafe[node] !== undefined) return isNodeSafe[node];
			if (visited[node]) return false;
			visited[node] = true;
			for (const next of graph[node])
				if (!dfs(next)) {
					isNodeSafe[node] = false;
					return false;
				}
			isNodeSafe[node] = true;
			return true;
		};
	for (let i = 0; i < graph.length; i++) dfs(i) && res.push(i);
	return res;
};

eventualSafeNodes([[1, 2], [2, 3], [5], [0], [5], [], []]);
