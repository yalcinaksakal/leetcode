/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
	const n = costs.length / 2,
		persons = Array(costs.length)
			.fill()
			.map((_, i) => i);
	return persons
		.sort((a, b) => costs[a][0] - costs[a][1] - costs[b][0] + costs[b][1])
		.reduce((a, c, i) => a + costs[c][i < n ? 0 : 1], 0);
};
