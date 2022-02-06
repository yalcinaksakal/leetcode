/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
	const first = {},
		second = {};
	let sum1 = 0,
		sum2 = 0;
	for (let i = 0; i < nums.length; i++) {
		sum1 += nums[i];
		sum2 += nums[i];
		if (i + 1 >= firstLen) {
			i - firstLen && (sum1 -= nums[i - firstLen]);
			first[i] = sum1;
		}
		if (i + 1 >= secondLen) {
			i - secondLen && (sum2 -= nums[i - secondLen]);
			second[i] = sum2;
		}
	}

	console.log(first, second);
};
