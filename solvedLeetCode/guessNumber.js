/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
	let low = 1,
		high = n,
		mid,
		g;

	while (low < high) {
		mid = (low + high) >>> 1;
		g = guess(mid);
		if (!g) return mid;
		g == 1 ? (low = mid + 1) : (high = mid);
	}

	return low;
};
