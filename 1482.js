/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
	if (m * k > bloomDay.length) return -1;
	const getBouquetsAtDay = day => {
		let bouq = 0,
			bloomed = 0;
		for (const bloom of bloomDay)
			if (day >= bloom) {
				bloomed++;
				if (bloomed === k) {
					bouq++;
					bloomed = 0;
				}
			} else bloomed = 0;

		return bouq;
	};
	let low = 0,
		mid,
		high = 10 ** 9;
	while (low < high) {
		mid = (low + high) >>> 1;
		getBouquetsAtDay(mid) < m ? (low = mid + 1) : (high = mid);
	}
	return low;
};
