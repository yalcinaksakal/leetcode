/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function (plantTime, growTime) {
	let next = 0;
	return growTime
		.map((t, i) => [t, i])
		.sort((a, b) => b[0] - a[0])
		.reduce((acc, cur) => {
			next += plantTime[cur[1]];
			return Math.max(acc, next + cur[0]);
		}, 0);
};
