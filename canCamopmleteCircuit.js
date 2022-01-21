/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
	let sum = 0,
		min = 0,
		cur;

	for (let i = 0; i < gas.length - 1; i++) {
		sum += gas[i] - cost[i];
		min = Math.min(min, sum);
	}

	for (let i = gas.length - 1; i > -1; i--) {
		cur = gas[i] - cost[i];
		if (cur >= (min < 0 ? -min : 0)) return i;
		min += cur;
	}

	return -1;
};
