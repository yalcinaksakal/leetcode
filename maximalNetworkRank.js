/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
	if (!roads.length) return 0;
	const graph = {};
	let ranks = {},
		rank;
	for (const [c1, c2] of roads) {
		graph[c1] ? graph[c1].add(c2) : (graph[c1] = new Set([c2]));
		graph[c2] ? graph[c2].add(c1) : (graph[c2] = new Set([c1]));
	}
	for (const c of Object.keys(graph))
		ranks[graph[c].size]
			? ranks[graph[c].size].push(+c)
			: (ranks[graph[c].size] = [+c]);
	ranks = Object.entries(ranks).sort((a, b) => +b[0] - a[0]);
	console.log(ranks);
	if (ranks[0][1].length > 1) {
		rank = 2 * graph[ranks[0][1][0]].size;
		for (let i = 0; i < ranks[0][1].length; i++)
			for (let j = i + 1; j < ranks[0][1].length; j++)
				if (!graph[ranks[0][1][i]].has(ranks[0][1][j])) return rank;
		return rank - 1;
	}

	rank = graph[ranks[0][1][0]].size + graph[ranks[1][1][0]].size;
	for (const c of ranks[1][1]) if (!graph[ranks[0][1][0]].has(c)) return rank;
	return rank - 1;
};
console.log(
	maximalNetworkRank(24, [
		[1, 20],
		[23, 15],
		[23, 11],
		[11, 2],
		[11, 17],
		[18, 14],
		[21, 12],
		[14, 8],
		[15, 7],
		[21, 20],
		[2, 0],
		[23, 5],
		[8, 22],
		[10, 6],
		[13, 17],
		[19, 6],
		[16, 0],
		[23, 7],
		[0, 23],
		[11, 14],
		[12, 10],
		[4, 11],
		[13, 16],
		[19, 21],
		[19, 9],
		[10, 7],
		[14, 13],
		[6, 23],
		[4, 5],
		[3, 17],
		[12, 18],
		[11, 18],
		[20, 0],
		[11, 15],
		[23, 14],
		[1, 0],
		[3, 18],
		[1, 3],
		[4, 21],
		[9, 11],
		[2, 10],
		[19, 10],
		[11, 3],
		[5, 10],
		[8, 19],
		[8, 23],
		[14, 10],
		[4, 1],
		[0, 9],
		[10, 15],
		[19, 15],
		[20, 8],
		[4, 8],
		[19, 23],
		[16, 19],
		[13, 19],
		[9, 1],
		[16, 4],
		[2, 15],
		[21, 1],
		[21, 15],
		[8, 17],
		[20, 9],
		[9, 4],
		[15, 14],
		[7, 3],
		[22, 18],
		[5, 20],
		[14, 7],
		[18, 23],
		[17, 9],
		[13, 18],
		[11, 13],
		[15, 12],
		[11, 5],
		[17, 1],
		[16, 20],
		[20, 10],
		[15, 22],
		[3, 21],
		[3, 4],
		[20, 2],
	])
);
