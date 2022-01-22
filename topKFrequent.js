/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var findKthLargest = function (freq, k, left = 0, right = freq.length - 1) {
	let pivot = left;

	const swap = (i, inc = 1) => {
		const tmp = freq[i];
		freq[i] = freq[pivot];
		freq[pivot] = tmp;
		pivot += inc;
	};

	for (let i = left; i <= right; i++) if (freq[i][1] < freq[right][1]) swap(i);
	swap(right, 0);

	const count = right - pivot + 1;
	return count == k
		? freq.slice(pivot).map(f => f[0])
		: count > k
		? findKthLargest(freq, k, pivot + 1, right)
		: findKthLargest(freq, k - count, left, pivot - 1, k - count);
};

var topKFrequent = function (nums, k) {
	const freq = {};

	for (const num of nums) freq[num] ? freq[num]++ : (freq[num] = 1);
	findKthLargest(Object.entries(freq), k);
};
