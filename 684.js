/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
	const roots = {},
		find = v => {
			if (!roots[v]) roots[v] = v;
			if (roots[v] !== v) roots[v] = find(roots[v]);
			return roots[v];
		},
		union = (u, v) => {
			const p1 = find(u),
				p2 = find(v);
			if (p1 !== p2) {
				roots[p2] = roots[p1];
				return false;
			}
			return true;
		};
	let res;
	for (const edge of edges) union(...edge) && (res = edge);
	return res;
};
console.log(
	findRedundantConnection([
		[9, 10],
		[5, 8],
		[2, 6],
		[1, 5],
		[3, 8],
		[4, 9],
		[8, 10],
		[4, 10],
		[6, 8],
		[7, 9],
	])
);
