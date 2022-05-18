/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
//Tarjan
var criticalConnections = function (n, connections) {
	let id = 0;
	const graph = {},
		unvisited = -1,
		ids = Array(n).fill(unvisited),
		lowLinks = Array(n).fill(0),
		onStack = {},
		stack = [],
		criticalCon = [],
		dfs = (prev, node) => {
			stack.push(node);
			onStack[node] = true;
			ids[node] = lowLinks[node] = id++;
			graph[node].forEach(neighbour => {
				if (neighbour !== prev) {
					ids[neighbour] === unvisited && dfs(node, neighbour);
					//most important line
					if (onStack[neighbour])
						lowLinks[node] = Math.min(lowLinks[node], lowLinks[neighbour]);
				}
			});
			//if we are at the begining of strongly connected components, we r done, clear stack
			if (ids[node] === lowLinks[node])
				while (stack.length) {
					const connectedNode = stack.pop();
					onStack[connectedNode] = false;
					lowLinks[connectedNode] = lowLinks[node];
				}
		};
	for (const [n1, n2] of connections) {
		!graph[n1] && (graph[n1] = new Set());
		!graph[n2] && (graph[n2] = new Set());
		graph[n1].add(n2);
		graph[n2].add(n1);
	}
	dfs(-1, 0);
	for (const con of connections)
		lowLinks[con[0]] !== lowLinks[con[1]] && criticalCon.push(con);
	console.log(criticalCon);
};

criticalConnections(4, [
	[0, 1],
	[1, 2],
	[2, 0],
	[1, 3],
]);
