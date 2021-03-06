/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
	let shortest, visited;
	const getShortest = (path, dist = 0) => {
		if (shortest < dist) return shortest;
		if (visited.size === graph.length) return dist;
		const node = path[path.length - 1];
		let added = false,
			newDist;
		for (let i = 0; i < graph[node].length; i++) {
			if (visited.has(graph[node][i])) continue;
			added = true;
			visited.add(graph[node][i]);
			const next = getShortest([...path, graph[node][i]], dist + 1);
			if (!newDist || next < newDist) newDist = next;
			visited.delete(graph[node][i]);
		}
		if (!added) {
			let newPath;
			for (let i = 0; i < path.length; i++)
				if (graph[node].includes(path[i])) {
					newPath = path.slice(0, i + 1);
					break;
				}
			if (newPath) return getShortest(newPath, dist + 1);
		}
		return newDist;
	};
	visited = new Set([0]);
	shortest = getShortest([0]);
	for (let i = 1; i < graph.length; i++) {
		visited = new Set([i]);
		shortest = Math.min(shortest, getShortest([i]));
	}

	return shortest;
};

console.log(
	// shortestPathLength([
	// 	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	// 	[0, 2, 3, 4, 5, 6, 7, 8, 9],
	// 	[0, 1, 3, 4, 5, 6, 7, 8, 9],
	// 	[0, 1, 2, 4, 5, 6, 7, 8, 9],
	// 	[0, 1, 2, 3, 5, 6, 7, 8, 9],
	// 	[0, 1, 2, 3, 4, 6, 7, 8, 9],
	// 	[0, 1, 2, 3, 4, 5, 7, 8, 9],
	// 	[0, 1, 2, 3, 4, 5, 6, 8, 9],
	// 	[0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
	// 	[0, 1, 2, 3, 4, 5, 6, 7, 8, 11],
	// 	[8],
	// 	[9],
	// ]),

	shortestPathLength([
		[1, 2, 3, 4],
		[0, 2, 5],
		[0, 1],
		[0, 1, 5],
		[0, 6],
		[3],
		[4],
	])
);
