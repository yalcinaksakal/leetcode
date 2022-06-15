/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */

var maximumBeauty = function (items, queries) {
	queries = queries.map((val, i) => [val, i]);
	queries.sort((a, b) => a[0] - b[0]);
	items.sort((a, b) => a[0] - b[0]);
	let q = 0,
		max = 0;
	const res = Array(queries.length).fill(0);
	for (const item of items) {
		while (q < queries.length && queries[q][0] < item[0])
			res[queries[q++][1]] = max;
		max = Math.max(max, item[1]);
	}
	while (q < queries.length) res[queries[q++][1]] = max;
	return res;
};
