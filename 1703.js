/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function (nums, k) {
	let min = 2 * 10 ** 9,
		start = 0;
	const indicesOfOnes = [],
		processRange = (start, end) => {
			let countOnes = 0,
				swaps = 0;
			for (let i = start + 1; i < end; i++)
				nums[i] ? countOnes++ : (swaps += Math.min(countOnes, k - countOnes));
			min = Math.min(min, swaps);
		},
		handleOnes = i => {
			indicesOfOnes.push(i);
			if (indicesOfOnes.length < k) return;
			processRange(
				indicesOfOnes[start++],
				indicesOfOnes[indicesOfOnes.length - 1]
			);
		};
	for (let i = nums.findIndex(num => num); i < nums.length; i++)
		if (nums[i]) {
			handleOnes(i);
			if (!min) break;
		}
	return min;
};
minMoves([1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1], 2);
