//1192
var criticalConnections = function (n, connections) {
	let time = 0;
	const discovery = {},
		low = {},
		graph = {},
		res = [],
		dfs = (prev, cur) => {
			discovery[cur] = low[cur] = ++time;
			graph[cur].forEach(node => {
				if (prev !== node) {
					!discovery[node] && dfs(cur, node);
					low[cur] = Math.min(low[cur], low[node]);
					if (low[node] > discovery[cur]) res.push([cur, node]);
				}
			});
		};
	for (const [n1, n2] of connections) {
		graph[n1] ? graph[n1].push(n2) : (graph[n1] = [n2]);
		graph[n2] ? graph[n2].push(n1) : (graph[n2] = [n1]);
	}
	dfs(-1, 0);
	return res;
};
