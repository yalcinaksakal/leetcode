/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	let last = nums.length - 1,
		i = 0,
		tmp;
	while (i < last) {
		if (nums[i] % 2) {
			while (nums[last] % 2) last--;
			if (last <= i) break;
			tmp = nums[last];
			nums[last--] = nums[i];
			nums[i] = tmp;
		} else i++;
	}
	return nums;
};
console.log(sortArrayByParity([1, 1, 1, 1]));
