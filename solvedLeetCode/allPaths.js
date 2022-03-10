/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	const path = [],
		res = [],
		visit = i => {
			path.push(i);

			if (i == graph.length - 1) res.push([...path]);
			for (const n of graph[i]) if (!path.includes(n)) visit(n);
			path.pop();
		};

	visit(0);
	return res;
};
