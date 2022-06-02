/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1, jug2, target) {
	//gcd=greatest common divisor
	const gcd = (x, y) => (y ? gcd(y, x % y) : x);
	return !target || (jug1 + jug2 >= target && target % gcd(jug1, jug2) === 0);
};
