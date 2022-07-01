/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function (nums1, nums2) {
	const mod = 10 ** 9 + 7,
		sortedNums1 = [...nums1].sort((a, b) => a - b),
		bs = val => {
			let low = 0,
				high = nums1.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				sortedNums1[mid] < val ? (low = mid + 1) : (high = mid);
			}
			return low
				? Math.min(
						Math.abs(sortedNums1[low] - val),
						Math.abs(sortedNums1[low - 1] - val)
				  )
				: Math.abs(sortedNums1[low] - val);
		};
	let maxReduction = 0,
		absSumDif = 0,
		absDif;
	for (let i = 0; i < nums1.length; i++) {
		absDif = Math.abs(nums1[i] - nums2[i]);
		absSumDif = (absSumDif + absDif) % mod;
		maxReduction = Math.max(maxReduction, absDif - bs(nums2[i]));
	}
	return absSumDif - maxReduction + (absSumDif < maxReduction ? mod : 0);
};

minAbsoluteSumDiff([2, 412, 123, 124, 235, 46]);
