/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
	while (tx >= sx && ty >= sy) {
		if (sx === tx) return !((ty - sy) % tx);
		if (sy === ty) return !((tx - sx) % ty);
		tx > ty ? (tx %= ty) : (ty %= tx);
	}
	return false;
};
console.log(reachingPoints(2, 2, 1000, 4));
