/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
	const n = nums1.length,
		twoSum = {};
	let res = 0,
		sum;

	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++) {
			sum = nums1[i] + nums2[j];
			twoSum[sum] ? twoSum[sum]++ : (twoSum[sum] = 1);
		}
	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++) {
			sum = nums3[i] + nums4[j];
			twoSum[-sum] && (res += twoSum[-sum]);
		}
	return res;
};
