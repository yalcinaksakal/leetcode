// BFS shortest Reach

function bfs(n, m, edges, s) {
	// Write your code here
	const neighbors = {},
		que = [s, null],
		visited = {},
		res = [];
	for (const [n1, n2] of edges) {
		if (!neighbors[n1]) neighbors[n1] = new Set();
		if (!neighbors[n2]) neighbors[n2] = new Set();
		neighbors[n1].add(n2);
		neighbors[n2].add(n1);
	}
	let dist = 6,
		node;
	visited[s] = 0;

	while (que.length) {
		node = que.shift();
		if (node === null) {
			if (que.length) que.push(null);
			dist += 6;
			continue;
		}
		if (!neighbors[node]) continue;
		neighbors[node].forEach(n => {
			if (visited[n] === undefined) {
				visited[n] = dist;
				que.push(n);
			}
		});
	}

	for (let i = 1; i <= n; i++)
		if (i !== s) res.push(visited[i] ? visited[i] : -1);

	return res;
}

bfs(
	4,
	2,
	[
		[1, 2],
		[1, 3],
	],
	1
);
