/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	const visited = [],
		res = [];
	const visit = i => {
		visited.push(i);
		if (i == graph.length - 1) res.push([...visited]);
		for (const n of graph[i]) if (!visited.includes(n)) visit(n);
		visited.pop();
	};
	visit(0);
	return res;
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
