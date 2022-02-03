/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

const minReorder = (n, connections) => {
	const roads = {},
		visited = {};
	let changes = 0;

	const bfs = (city = 0) => {
		if (visited[city]) return;
		visited[city] = 1;
		const next = [];
		for (const c of roads[city]) {
			if (visited[c[0]]) continue;
			if (c[1] === "+") changes++;
			next.push(c[0]);
		}
		for (const c of next) bfs(c);
	};

	//roads leaving +, arriving -
	for (const [city1, city2] of connections) {
		roads[city1]
			? roads[city1].push([city2, "+"])
			: (roads[city1] = [[city2, "+"]]);
		roads[city2]
			? roads[city2].push([city1, "-"])
			: (roads[city2] = [[city1, "-"]]);
	}

	bfs();
	return changes;
};

console.log(
	minReorder(6, [
		[0, 1],
		[1, 3],
		[2, 3],
		[4, 0],
		[4, 5],
	])
);
