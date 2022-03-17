/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var goodTriplets = function (nums1, nums2) {
	let triplets = 0,
		sorted;
	const pos = {},
		pre = {},
		post = {},
		n = nums2.length,
		push = (num, isRev) => {
			let low = 0,
				high = sorted.length,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				sorted[mid] < num ? (low = mid + 1) : (high = mid);
			}
			if (num > sorted[low]) low++;
			sorted.splice(low, 0, num);
			return isRev ? sorted.length - low - 1 : low;
		},
		fillPrePost = (obj, isPost) => {
			sorted = [];
			for (let i = 0; i < n; i++)
				obj[isPost ? n - 1 - i : i] = push(
					pos[nums2[isPost ? n - 1 - i : i]],
					isPost
				);
		};
	for (let i = 0; i < nums1.length; i++) pos[nums1[i]] = i;
	fillPrePost(pre, false);
	fillPrePost(post, true);

	for (let i = 1; i < n; i++) triplets += pre[i] * post[i];

	return triplets;
};
goodTriplets([2, 0, 1, 3], [0, 1, 2, 3]);
