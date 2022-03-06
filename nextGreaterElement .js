/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	const stack = [],
		next = {};
	for (const num of nums2) {
		if (stack.length)
			while (stack[stack.length - 1] < num) next[stack.pop()] = num;
		stack.push(num);
	}

	return nums1.map(num => (next[num] === undefined ? -1 : next[num]));
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
