/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

const minReorder = (n, connections) => {
	const roads = {},
		visited = {},
		visit = (d = 0) => {
			visited[d] = 1;
			for (const neighbour of roads[d]) {
				if (visited[neighbour[0]]) continue;
				if (neighbour[1] === "+") changes++;
				visit(neighbour[0]);
			}
		};
	let changes = 0;
	//roads leaving +, arriving -
	for (const [city1, city2] of connections) {
		roads[city1]
			? roads[city1].push([city2, "+"])
			: (roads[city1] = [[city2, "+"]]);
		roads[city2]
			? roads[city2].push([city1, "-"])
			: (roads[city2] = [[city1, "-"]]);
	}

	visit();
	return changes;
};
