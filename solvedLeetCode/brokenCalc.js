/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
const brokenCalc = (startValue, target) =>
	startValue >= target
		? startValue - target
		: 1 + brokenCalc(startValue, target % 2 ? target + 1 : target / 2);

console.log(brokenCalc(1, 10000000));
