var searchRange = function (nums, target) {
	let low = 0,
		mid,
		high = nums.length - 1;

	while (low < high) {
		mid = (low + high) >>> 1;
		if (nums[mid] < target) low = mid + 1;
		else high = mid;
	}

	if (nums[low] === target) {
		high = low;
		while (nums[high + 1] === target) high++;
		return [low, high];
	} else return [-1, -1];
};

console.log(searchRange([5, 7, 7, 10], 8));
