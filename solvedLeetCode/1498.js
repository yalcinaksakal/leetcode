/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
	nums.sort((a, b) => b - a);
	let res = 0,
		i = nums.length;
	const mod = 10 ** 9 + 7,
		powMemo = { 0: 1 },
		power = n => {
			!powMemo[n] && (powMemo[n] = (2 * power(n - 1)) % mod);
			return powMemo[n];
		},
		bs = (val, high) => {
			let mid,
				low = 0;
			while (low < high) {
				mid = (low + high) >>> 1;
				nums[mid] > val ? (low = mid + 1) : (high = mid);
			}

			return low;
		};
	while (target - nums[--i] >= nums[i])
		res = (res + power(i - bs(target - nums[i], i))) % mod;
	return res;
};
numSubseq([3, 5, 6, 7], 9);
