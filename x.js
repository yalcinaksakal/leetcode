/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
//Tarjan
var criticalConnections = function (n, connections) {
	let time = 0;
	const graph = {},
		res = [],
		discovery = {},
		low = {},
		dfs = (prev, cur) => {
			discovery[cur] = low[cur] = ++time;
			graph[cur].forEach(next => {
				if (next !== prev) {
					!discovery[next] && dfs(cur, next);
					low[cur] > low[next] && (low[cur] = low[next]);
					low[next] > discovery[cur] && res.push([cur, next]);
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
console.log(
	criticalConnections(5, [
		[1, 0],
		[2, 0],
		[3, 2],
		[4, 2],
		[4, 3],
		[3, 0],
		[4, 0],
	])
);
