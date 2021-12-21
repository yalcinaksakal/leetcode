/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
	const map = {},
		prefix = [];

	let lastUsedRightMost = -1,
		res = 0,
		comp;

	for (let i = 0; i < nums.length; i++) {
		prefix.push(nums[i] + (i ? prefix[i - 1] : 0));
		map[prefix[i]] = i;
	}

	for (let i = 0; i < nums.length; i++) {
		comp = map[prefix[i] - target];
		if (
			(comp !== undefined && comp < i && comp >= lastUsedRightMost) ||
			nums[i] === target ||
			(prefix[i] === target && lastUsedRightMost < 0)
		) {
			console.log(comp, i);
			res++;
			lastUsedRightMost = i;
		}
	}

	return res;
};

console.log(maxNonOverlapping([-1, -2, 8, -3, 8, -5, 5, -4, 5, 4, 1], 5));
