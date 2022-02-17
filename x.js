var canCompleteCircuit = function (gas, cost) {
	let sum = 0,
		cur = 0,
		res = 0;
	for (let i = 0; i < gas.length; i++) {
		cur += gas[i] - cost[i];
		if (cur < 0) {
			res = i + 1;
			sum += cur;
			cur = 0;
		}
	}

	return sum + cur < 0 ? -1 : res;
};

canCompleteCircuit([3, 1, 1], [1, 2, 2]);
