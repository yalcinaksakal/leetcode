/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
//Tarjan
var criticalConnections = function (n, connections) {
	let id = 0,
		path = {};
	const criticalCon = [],
		graph = {},
		visited = {},
		lowLinks = {},
		nodeId = {},
		dfs = (prev, node) => {
			path[node] = visited[node] = true;
			nodeId[node] = lowLinks[node] = id++;
			graph[node].forEach(neighbour => {
				if (neighbour !== prev) {
					if (visited[neighbour])
						path[neighbour] &&
							(lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbour]));
					else {
						lowLinks[node] = Math.min(lowLinks[node], dfs(node, neighbour));
						lowLinks[neighbour] > lowLinks[node] &&
							criticalCon.push([node, neighbour]);
					}
				}
			});
			lowLinks[node] === nodeId[node] && (path = {});
			return lowLinks[node];
		};
	for (const [n1, n2] of connections) {
		!graph[n1] && (graph[n1] = new Set());
		!graph[n2] && (graph[n2] = new Set());
		graph[n1].add(n2);
		graph[n2].add(n1);
	}
	dfs(-1, 0);
	return criticalCon;
};

criticalConnections(4, [
	[0, 1],
	[1, 2],
	[2, 0],
	[1, 3],
]);
