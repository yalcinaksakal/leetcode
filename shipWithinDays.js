/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
	let low = Math.max(...weights),
		high = weights.reduce((a, c) => a + c, 0),
		mid;

	const getDays = n => {
		let count = 0,
			t = 0,
			i = 0;
		while (i < weights.length) {
			t += weights[i++];
			if (t >= n) {
				if (t != n) i--;
				t = 0;
				count++;
			}
		}
		if (t) count++;
		return count;
	};

	while (low < high) {
		mid = (low + high) >>> 1;
		if (getDays(mid) > days) low = mid + 1;
		else high = mid;
	}

	return low;
};
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
