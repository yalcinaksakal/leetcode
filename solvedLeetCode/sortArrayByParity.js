/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
	let i = 0,
		j = nums.length - 1,
		tmp;
	while (i < j) {
		while (!(nums[i] % 2) && i < nums.length) i++;
		while (nums[j] % 2 && j > -1) j--;
		if (i < j) {
			tmp = nums[i];
			nums[i++] = nums[j];
			nums[j--] = tmp;
		}
	}
	return nums;
};

sortArrayByParity([0, 2]);
