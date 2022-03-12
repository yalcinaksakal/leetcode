/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
	const edges = {},
		fillEdges = (coloredEdges, color) => {
			for (const [x, y] of coloredEdges) {
				!edges[x] && (edges[x] = {});
				edges[x][y] = edges[x][y] ? "P" : color;
			}
		},
		shortest = {},
		visited = {},
		bfs = [[0, "R"], [0, "B"], null],
		res = [];
	let dist = 1,
		i = -1;
	shortest[0] = 0;
	visited["0,R"] = true;
	visited["0,B"] = true;

	fillEdges(redEdges, "R");
	fillEdges(blueEdges, "B");

	while (++i < bfs.length) {
		if (bfs[i] === null) {
			if (i + 1 < bfs.length) bfs.push(null);
			dist++;
			continue;
		}
		const [curNode, curColor] = bfs[i];
		if (edges[curNode]) {
			Object.entries(edges[curNode]).forEach(([node, color]) => {
				if (color === "P" || color !== curColor) {
					shortest[node] === undefined && (shortest[node] = dist);
					color = curColor === "B" ? "R" : "B";
					if (!visited[node + "," + color]) {
						visited[node + "," + color] = true;
						bfs.push([node, color]);
					}
				}
			});
		}
	}

	for (let i = 0; i < n; i++)
		res.push(shortest[i] === undefined ? -1 : shortest[i]);
	console.table(res);
	return res;
};

shortestAlternatingPaths(
	5,
	[
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	],
	[
		[1, 2],
		[2, 3],
		[3, 1],
	]
);
