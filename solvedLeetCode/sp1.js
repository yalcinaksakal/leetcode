/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function (graph) {
	if (graph.length < 2) return 0;
	const getShortest = start => {
		const bfs = [[[start], new Set([start])], null];
		let dist = 1;
		while (bfs.length) {
			const next = bfs.shift();
			if (!next) {
				if (bfs.length) bfs.push(null);
				dist++;
				continue;
			}
			const [path, visited] = next;
			const node = path[path.length - 1];
			let added = false;
			for (let j = 0; j < graph[node].length; j++) {
				if (visited.has(graph[node][j])) continue;
				added = true;
				const newVisited = new Set(visited);
				newVisited.add(graph[node][j]);
				if (newVisited.size === graph.length) return dist;
				bfs.push([[...path, graph[node][j]], newVisited]);
			}
			if (!added) {
				let newPath;
				for (let i = 0; i < path.length; i++)
					if (graph[node].includes(path[i])) {
						newPath = path.slice(0, i + 1);
						break;
					}
				if (newPath) bfs.push([newPath, new Set(visited)]);
			}
		}
	};
	let shortest = getShortest(0);
	for (let i = 1; i < graph.length; i++)
		shortest = Math.min(shortest, getShortest(i));

	return shortest;
};
shortestPathLength([
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[0, 2, 3, 4, 5, 6, 7, 8, 9],
	[0, 1, 3, 4, 5, 6, 7, 8, 9],
	[0, 1, 2, 4, 5, 6, 7, 8, 9],
	[0, 1, 2, 3, 5, 6, 7, 8, 9],
	[0, 1, 2, 3, 4, 6, 7, 8, 9],
	[0, 1, 2, 3, 4, 5, 7, 8, 9],
	[0, 1, 2, 3, 4, 5, 6, 8, 9],
	[0, 1, 2, 3, 4, 5, 6, 7, 9, 10],
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 11],
	[8],
	[9],
]);
