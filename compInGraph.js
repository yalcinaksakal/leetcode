//components in a graph
function componentsInGraph(gb) {
	// Write your code here
	const neighbors = {},
		visited = {},
		nodes = new Set(),
		bfs = n => {
			visited[n] = true;
			const que = [n];
			let i = -1,
				node;
			while (++i < que.length) {
				node = que[i];
				if (!neighbors[node]) continue;
				neighbors[node].forEach(neighbor => {
					if (!visited[neighbor]) {
						que.push(neighbor);
						visited[neighbor] = true;
					}
				});
			}
			return que.length;
		};

	for (const [n1, n2] of gb) {
		if (!neighbors[n1]) neighbors[n1] = new Set();
		if (!neighbors[n2]) neighbors[n2] = new Set();
		neighbors[n1].add(n2);
		neighbors[n2].add(n1);
		nodes.add(n1);
		nodes.add(n2);
	}

	let min = nodes.size,
		max = 2,
		count;

	nodes.forEach(n => {
		if (!visited[n]) {
			count = bfs(n);
			min = Math.min(count, min);
			max = Math.max(count, max);
		}
	});

	return [min, max];
}
componentsInGraph([
	[1, 6],
	[2, 7],
	[3, 8],
	[4, 9],
	[2, 6],
]);
