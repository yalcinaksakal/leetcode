/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
	const res = [];
	let i = 0,
		j = 1;

	intervals.sort((a, b) => a[0] - b[0]);

	while (i < intervals.length) {
		while (j < intervals.length && intervals[i][1] >= intervals[j][0]) {
			intervals[i][1] = Math.max(intervals[j][1], intervals[i][1]);
			j++;
		}
		res.push(intervals[i]);
		i = j;
		j++;
	}

	return res;
};

merge([
	[1, 4],
	[0, 2],
	[3, 5],
]);
