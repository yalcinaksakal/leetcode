var twoSum = function (numbers, target) {
	let i = -1,
		high,
		low,
		mid,
		remaining,
		last = nums.length - 1;

	while (++i < last) {
		remaining = target - numbers[i];
		if (remaining < numbers[i + 1]) break;
		low = i + 1;
		high = last;
		while (low < high) {
			mid = (low + high) >>> 1;
			if (numbers[mid] < remaining) low = mid + 1;
			else high = mid;
		}
		if (numbers[low] === remaining) return [i + 1, low + 1];
	}
};
twoSum([-1, -1, 0, 1, 2, 3], -2);
