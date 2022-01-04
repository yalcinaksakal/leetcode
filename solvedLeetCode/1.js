/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function (n, m, group, beforeItems) {
	let i = m;
	const groups = {},
		gDep = {};

	for (let j = 0; j < n; j++) {
		if (group[j] === -1) {
			groups[i] = j;
			group[j] = i;
			i++;
			continue;
		}
		groups[group[j]] ? groups[group[j]].push(j) : (groups[group[j]] = [j]);
	}

	console.log(groups, group);
};

sortItems(
	8,
	2,
	[-1, -1, 1, 0, 0, 1, 0, -1],
	[[], [6], [5], [6], [3, 6], [], [], []]
);
