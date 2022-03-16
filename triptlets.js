/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function (nums1, nums2) {
	let triplets = 0;
	const pos = {},
		count = {};
	count[0] = 0;
	for (let i = 0; i < nums1.length; i++) pos[nums1[i]] = i;
	for (let i = 1; i < nums2.length; i++) {
		count[i] = 0;
		for (let j = 0; j < i; j++)
			if (pos[nums2[i]] > pos[nums2[j]]) {
				count[i]++;
				triplets += count[j];
			}
	}
	return triplets;
};
