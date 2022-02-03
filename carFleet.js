/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
	const cars = [];
	for (let i = 0; i < speed.length; i++)
		cars.push({ pos: position[i], time: (target - position[i]) / speed[i] });
	cars.sort((a, b) => b.pos - a.pos);
	let fleet = 0,
		max = 0;
	for (const car of cars)
		if (car.time > max) {
			fleet++;
			max = car.time;
		}

	return fleet;
};
