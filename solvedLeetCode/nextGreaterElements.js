/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
	const stack = [],
		next = {},
		n = nums.length,
		res = [];
	nums.push(...nums);
	for (let i = 0; i < nums.length; i++) {
		if (stack.length)
			while (nums[stack[stack.length - 1]] < nums[i])
				next[stack.pop() % n] = nums[i];
		stack.push(i);
	}

	for (let i = 0; i < n; i++) res.push(next[i] === undefined ? -1 : next[i]);

	return res;
};
