/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
	let prevLow = 0,
		max = 0;
	const bs = (low, val) => {
		let mid,
			high = nums1.length - 1;
		while (low < high) {
			mid = (low + high) >>> 1;
			nums1[mid] > val ? (low = mid + 1) : (high = mid);
		}
		return low;
	};
	for (let i = 0; i < nums2.length; i++) {
		prevLow = bs(prevLow, nums2[i]);
		if (nums1[prevLow] > nums2[i]) break;
		max = Math.max(max, i - prevLow);
	}
	return max;
};

maxDistance([14, 13, 12], [11, 10, 9, 8, 7, 6]);
