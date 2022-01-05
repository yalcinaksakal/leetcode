/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	let i = 0,
		j = 1,
		res = 0;

	intervals.sort((a, b) => a[0] - b[0]);

	while (i < intervals.length) {
		while (j < intervals.length && intervals[i][1] > intervals[j][0]) {
			res++;
			if (intervals[i][1] >= intervals[j][1]) break;
			j++;
		}
		i = j;
		j = i + 1;
	}

	console.log(res);
	return res;
};

eraseOverlapIntervals([
	[1, 2],
	[2, 3],
	[3, 4],
	[1, 3],
]);
