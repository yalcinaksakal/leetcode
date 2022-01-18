/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function (nums) {
	let res = 0,
		sum,
		d;
	const max = Math.max(...nums);
	const min = Math.min(...nums);

	for (let a = 0; a < nums.length - 3; a++) {
		if (nums[a] > max - 2 * min) continue;
		for (let b = a + 1; b < nums.length - 2; b++) {
			if (nums[a] + nums[b] > max - min) continue;
			for (let c = b + 1; c < nums.length - 1; c++) {
				sum = nums[a] + nums[b] + nums[c];
				if (sum > max) continue;
				d = c + 1;
				while (d < nums.length) {
					nums[d] == sum && res++;
					d++;
				}
			}
		}
	}
	return res;
};
console.log(countQuadruplets([1, 2, 3, 6]));
