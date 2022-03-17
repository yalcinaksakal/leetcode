/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = nums =>
	nums.reduce((a, c, i) => {
		if (c > nums[i - 1] || !i) return a;
		const dif = nums[i - 1] - c + 1;
		nums[i] = nums[i - 1] + 1;
		return a + dif;
	}, 0);
console.log(minOperations([1, 5, 2, 4, 1]));
