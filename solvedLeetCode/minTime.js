/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
	const tree = {};

	for (const [r, l] of edges) {
		if (!tree[r]) tree[r] = {};
		tree[r][l] = 1;

		if (!tree[l]) tree[l] = {};
		tree[l][r] = 1;
	}

	const count = (start, prev = 0) => {
		let res = 0;
		for (const key of Object.keys(tree[start]))
			if (key !== prev) res += count(key, start);

		return res ? res + 1 : hasApple[start] ? 1 : 0;
	};

	const res = (count("0") - 1) * 2;
	return res < 0 ? 0 : res;
};

console.log(
	minTime(
		4,
		[
			[0, 2],
			[0, 3],
			[1, 2],
		],
		[false, true, false, false]
	)
);
