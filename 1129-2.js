/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
	const edges = Array(n)
			.fill()
			.map(() => ({})),
		shortest = Array(n).fill(-1),
		visited = { ["0,R"]: true, ["0,B"]: true },
		bfs = [[0, "R"], [0, "B"], null];
	let dist = 1,
		i = -1;
	shortest[0] = 0;
	for (const [x, y] of redEdges) edges[x][y] = edges[x][y] ? "RB" : "R";
	for (const [x, y] of blueEdges) edges[x][y] = edges[x][y] ? "RB" : "B";

	while (++i < bfs.length) {
		if (bfs[i] === null) {
			if (i + 1 < bfs.length) bfs.push(null);
			dist++;
			continue;
		}
		const [curNode, curColor] = bfs[i];
		Object.entries(edges[curNode]).forEach(([node, color]) => {
			if (color === "RB" || color !== curColor) {
				shortest[node] === -1 && (shortest[node] = dist);
				color = curColor === "B" ? "R" : "B";
				if (!visited[node + "," + color]) {
					visited[node + "," + color] = true;
					bfs.push([node, color]);
				}
			}
		});
	}
	return shortest;
};
