/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function (mass, asteroids) {
	asteroids.sort((a, b) => a - b);
	for (const a of asteroids)
		if (a > mass) return false;
		else mass += a;
	return true;
};
asteroidsDestroyed(10, [3, 9, 19, 5, 21]);
