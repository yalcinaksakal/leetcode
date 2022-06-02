/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

const minReorder = (n, connections) => {
	const roads = Array(n)
			.fill()
			.map(() => []),
		visited = {},
		visit = city => {
			visited[city] = true;
			for (const [next, direction] of roads[city])
				if (!visited[next]) {
					//if road direction is from neighbour to city, than direction=1, direction=0;
					changes += direction;
					visit(next);
				}
		};
	let changes = 0;
	//road from a node = 1, to a node = 0
	for (const [city1, city2] of connections) {
		roads[city1].push([city2, 1]);
		roads[city2].push([city1, 0]);
	}
	visit(0);
	return changes;
};
