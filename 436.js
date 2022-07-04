/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
	const sortedIntervals = intervals
			.map((interval, i) => [...interval, i])
			.sort((a, b) => a[0] - b[0]),
		bs = val => {
			let low = 0,
				mid,
				high = intervals.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				sortedIntervals[mid][0] < val ? (low = mid + 1) : (high = mid);
			}
			return sortedIntervals[low][0] >= val ? sortedIntervals[low][2] : -1;
		},
		res = [];
	for (const interval of intervals) res.push(bs(interval[1]));
	return res;
};
