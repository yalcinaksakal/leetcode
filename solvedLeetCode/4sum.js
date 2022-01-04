var fourSum = function (nums, target) {
	const sums = [];
	let j, x, y, remaining;

	nums.sort((a, b) => a - b);

	const next = (index, add) => {
		while (nums[index + add] === nums[index]) index += add;
		index += add;
		return index;
	};

	for (let i = 0; i < nums.length - 3; i++) {
		if (nums[i] === nums[i - 1]) continue;
		j = i + 1;
		while (j < nums.length - 2) {
			remaining = target - nums[i] - nums[j];
			x = j + 1;
			y = nums.length - 1;

			while (x < y) {
				if (nums[x] + nums[y] === remaining) {
					sums.push([nums[i], nums[j], nums[x], nums[y]]);
					x = next(x, 1);
					y = next(y, -1);
				} else if (nums[x] + nums[y] > remaining) y = next(y, -1);
				else x = next(x, 1);
			}
			j = next(j, 1);
		}
	}

	return sums;
};

fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);
