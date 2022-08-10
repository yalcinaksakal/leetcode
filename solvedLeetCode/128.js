/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	const roots = {},
		find = v => {
			roots[v] === undefined && (roots[v] = v);
			roots[v] !== v && (roots[v] = find(roots[v]));
			return roots[v];
		},
		union = (u, v) => (roots[find(u)] = v),
		groups = {};
	let max = 0,
		group,
		r;
	for (const num of nums)
		if (roots[num] === undefined) {
			r = find(num);
			for (let i = -1; i < 2; i += 2)
				roots[num + i] !== undefined && union(num + i, r);
		}
	Object.keys(roots).forEach(num => {
		group = find(num);
		groups[group] ? groups[group]++ : (groups[group] = 1);
		max = Math.max(max, groups[group]);
	});
	return max;
};
longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
