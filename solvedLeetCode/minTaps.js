/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
	ranges = ranges
		.map((r, i) => [i - r, i + r])
		.filter(r => r[0] != r[1])
		.sort((a, b) => a[0] - b[0]);
	if (!ranges.length) return -1;
	const que = [];
	let taps = 1,
		range,
		i = 1;

	range = ranges[0];
	while (i < ranges.length && ranges[i][0] <= 0)
		if (ranges[i++][1] >= range[1]) range = ranges[i - 1];
	que.push(range, null);

	while (que.length) {
		range = que.shift();
		if (!range) {
			que.length && que.push(null);
			taps++;
			continue;
		}
		if (range[1] >= n) return taps;
		while (i < ranges.length && ranges[i][0] <= range[1]) {
			if (ranges[i][1] > range[1]) que.push(ranges[i]);
			i++;
		}
	}

	return -1;
};
console.log(minTaps(5, [3, 0, 1, 1, 0, 0]));
