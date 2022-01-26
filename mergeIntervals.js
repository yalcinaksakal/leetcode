/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	let i = 0,
		j = 1,
		res = [];

	intervals.sort((a, b) => a[0] - b[0]);

	while (i < intervals.length) {
		while (j < intervals.length && intervals[i][1] >= intervals[j][0])
			intervals[i][1] = Math.max(intervals[i][1], intervals[j++][1]);

		res.push(intervals[i]);
		i = j++;
	}

	return res;
};
