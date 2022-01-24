/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	const map = {},
		res = [];
	for (const num of nums1) map[num] = 1;
	for (const num of nums2)
		if (map[num]) {
			res.push(num);
			map[num] = 0;
		}
	return res;
};
