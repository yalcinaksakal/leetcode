/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
	const res = [];
	let x = 1,
		y = 1000,
		f;
	while (x < 1001 && y > 0) {
		f = customfunction.f(x, y);
		if (f > z) y -= 1;
		else if (f < z) x += 1;
		else res.push([x++, y]);
	}
	return res;
};
