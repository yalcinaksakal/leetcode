/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
	let extraCables = 0;
	const roots = Array(n)
			.fill()
			.map((_, i) => i),
		find = v => {
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => {
			const p1 = find(u),
				p2 = find(v);
			p1 === p2 ? extraCables++ : (roots[p1] = roots[p2]);
		},
		networks = new Set();
	for (const [comp1, comp2] of connections) union(comp1, comp2);
	for (let i = 0; i < n; i++) networks.add(find(i));
	const numberOfUnconnectedNetworks = networks.size - 1;
	return extraCables >= numberOfUnconnectedNetworks
		? numberOfUnconnectedNetworks
		: -1;
};
makeConnected(4, [
	[0, 1],
	[0, 2],
	[1, 2],
]);
