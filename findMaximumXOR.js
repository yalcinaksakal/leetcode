/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
	let max = 0,
		mask = 0;
	const set = new Set(),
		n = nums.length;

	for (let i = 30; i >= 0; i--) {
		mask |= 1 << i;
		for (let j = 0; j < n; ++j) set.add(nums[j] & mask);
		let newMax = max | (1 << i);
		for (let prefix of set.keys())
			if (set.has(newMax ^ prefix)) {
				max = newMax;
				break;
			}
		set.clear();
	}
	return max;
};
