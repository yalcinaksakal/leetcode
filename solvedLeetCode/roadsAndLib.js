function roadsAndLibraries(n, c_lib, c_road, cities) {
	// Write your code here
	if (c_lib <= c_road) return n * c_lib;
	let cost = 0;
	const depth = Math.floor(c_lib / c_road),
		nodes = Array(n)
			.fill()
			.map((_, i) => i + 1),
		visited = {},
		neighbors = {},
		visit = (city, d = 0) => {
			if (d > depth || visited[city]) return;
			cost += d ? c_road : c_lib;
			visited[city] = true;
			if (neighbors[city]) neighbors[city].forEach(c => visit(c, d + 1));
		};
	for (const con of cities) {
		neighbors[con[0]]
			? neighbors[con[0]].push(con[1])
			: (neighbors[con[0]] = [con[1]]);
		neighbors[con[1]]
			? neighbors[con[1]].push(con[0])
			: (neighbors[con[1]] = [con[0]]);
	}
	nodes.sort(
		(a, b) =>
			(neighbors[b] ? neighbors[b].length : 0) -
			(neighbors[a] ? neighbors[a].length : 0)
	);
	for (const city of nodes) visit(city);
	return cost;
}
