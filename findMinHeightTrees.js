/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
	let nodeDegrees = {};
	Array(n)
		.fill()
		.map((_, i) => ({ node: i, connections: new Set() }))
		.forEach((n, i) => (nodeDegrees[i] = n));
	console.log(nodeDegrees);
	for (const [i, j] of edges) {
		nodeDegrees[i].connections.add(j);
		nodeDegrees[j].connections.add(i);
	}

	while (Object.keys(nodeDegrees).length > 2) {
		Object.values(nodeDegrees)
			.filter(node => node.connections.size === 1)
			.forEach(node => {
				nodeDegrees[Array.from(node.connections).pop()].connections.delete(
					node.node
				);
				delete nodeDegrees[node.node];
			});
	}
	return Object.values(nodeDegrees).map(node => node.node);
};
console.log(
	findMinHeightTrees(6, [
		[0, 1],
		[0, 2],
		[0, 3],
		[3, 4],
		[4, 5],
	])
);
