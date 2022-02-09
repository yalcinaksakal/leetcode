/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
	const big = x > y ? "ab" : "ba";
	if (x < y) [x, y] = [y, x];
	let points = 0,
		count0 = 0,
		count1 = 0;

	for (const ch of s)
		if (ch == big[0]) count0++;
		else if (ch == big[1]) {
			if (count0) {
				points += x;
				count0--;
			} else count1++;
		} else {
			points += Math.min(count0, count1) * y;
			count0 = count1 = 0;
		}
	points += Math.min(count0, count1) * y;
	return points;
};
console.log(maximumGain("cdbcbbaaabab", 4, 5));
