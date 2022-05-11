/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
	{
		const stack = [];
		let secondLargeNum = -(10 ** 9);

		for (let i = nums.length - 1; i > -1; i--) {
			if (secondLargeNum > nums[i]) return true;

			while (stack.length && nums[i] > stack[stack.length - 1])
				secondLargeNum = stack.pop();

			stack.push(nums[i]);
		}

		return false;
	}
};
console.log(find132pattern([1, 20, 2, 3, 4, 5, 6, 7, 8, 11]));
