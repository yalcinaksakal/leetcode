/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
	if (graph.length < 2) return 0;
	const getShortest = start => {
		const bfs = ["-" + start];

		while (bfs.length) {
			const path = bfs.shift(),
				node = +path.split("-").pop();
			for (let j = 0; j < graph[node].length; j++) {
				if (path.split("-" + node + "-" + graph[node][j]) > 1) continue;
				const newPath = path + "-" + graph[node][j];
				if (new Set([...newPath.split("-")]).size === graph.length + 1)
					return newPath.split("-").length - 2;
				bfs.push(newPath);
			}
		}
	};
	let shortest = getShortest(0);
	for (let i = 1; i < graph.length; i++)
		shortest = Math.min(shortest, getShortest(i));
	return shortest;
};
shortestPathLength([[1], [0, 2, 4], [1, 3, 4], [2], [1, 2]]);
