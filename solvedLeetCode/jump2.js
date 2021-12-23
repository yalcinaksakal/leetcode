var jump = function (nums) {
	let l = nums.length - 1,
		min,
		i;
	const minStep = {};
	minStep[l] = 0;

	while (l > 0) {
		l--;
		min = null;
		i = nums[l] + l;
		while (i > l) {
			if (minStep[i] !== undefined && (min === null || min > minStep[i]))
				min = minStep[i];
			i--;
		}
		if (min !== null) minStep[l] = min + 1;
	}

	return minStep[0];
};

console.log(jump([2, 3, 1, 1, 4]));
