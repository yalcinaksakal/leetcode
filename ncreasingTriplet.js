/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
	let first = 2 ** 31 - 1,
		second = first;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] <= first) first = nums[i];
		else if (nums[i] <= second) second = nums[i];
		else return true;
	}

	return false;
};
console.log(
	increasingTriplet([20, 100, 10, 12, 5, 13]),
	increasingTriplet([2, 1, 6, 0, 1, 5])
);
