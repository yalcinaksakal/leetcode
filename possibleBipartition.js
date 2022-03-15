/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
	const groups = Array(n + 1).fill(0),
		graph = Array(n + 1)
			.fill()
			.map(() => []);
	let node;
	for (const [p1, p2] of dislikes) {
		graph[p1].push(p2);
		graph[p2].push(p1);
	}

	for (let i = 1; i < groups.length; i++) {
		if (!graph[i].length || groups[i]) continue;
		const que = [i];
		groups[i] = 1;
		while (que.length) {
			node = que.shift();
			for (const n of graph[node])
				if (!groups[n]) {
					groups[n] = -1 * groups[node];
					que.push(n);
				} else if (groups[n] != -1 * groups[node]) return false;
		}
	}
	return true;
};

possibleBipartition(10, [
	[1, 2],
	[3, 4],
	[5, 6],
	[6, 7],
	[8, 9],
	[7, 8],
]);
