/**
 * @param {number[]} parents
 * @param {number[][]} queries
 * @return {number[]}
 */
var maxGeneticDifference = function (parents, queries) {
	const res = [];
	let max, parent;

	for (const [n, v] of queries) {
		max = 0;
		parent = n;
		while (parent != -1) {
			max = Math.max(max, parent ^ v);
			parent = parents[parent];
		}
		res.push(max);
	}

	return res;
};

console.log(
	maxGeneticDifference(
		[-1, 0, 1, 1],
		[
			[0, 2],
			[3, 2],
			[2, 5],
		]
	)
);
