/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let count = 0;
	const prefix = [],
		map = {};

	for (let i = 0; i < nums.length; i++) {
		count += nums[i];
		prefix.push(count);
		map[count] ? map[count].push(i) : (map[count] = [i]);
	}
	count = 0;

	for (let i = 0; i < nums.length; i++) {
		if (prefix[i] === k) count++;
		if (map[prefix[i] - k]) map[prefix[i] - k].forEach(j => j < i && count++);
	}

	return count;
};
subarraySum([1, 1, 1], 2);
