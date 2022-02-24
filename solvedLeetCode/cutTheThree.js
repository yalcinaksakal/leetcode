//Cut the tree
function cutTheTree(data, edges) {
	// Write your code here
	const sum = data.reduce((a, c) => a + c, 0),
		neighbors = {},
		visited = {},
		dfs = n => {
			visited[n] = true;
			let count = data[n - 1];
			if (neighbors[n])
				neighbors[n].forEach(ne => {
					if (!visited[ne]) count += dfs(ne);
				});
			const remaining = sum - count;
			min = Math.min(min, Math.abs(remaining - count));
			return count;
		};
	let min = sum;
	for (const [n1, n2] of edges) {
		if (!neighbors[n1]) neighbors[n1] = new Set();
		if (!neighbors[n2]) neighbors[n2] = new Set();
		neighbors[n1].add(n2);
		neighbors[n2].add(n1);
	}
	dfs(1);
	return min;
}
