/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function (nums, k) {
	let min = 2 * 10 ** 9,
		oneStart = 0,
		zeroStart = 0,
		groupNoOfKOnes = 0;
	const weightsAndIndicesOfZeros = [],
		indicesOfOnes = [],
		processRange = () => {
			let swaps = 0;
			for (let i = zeroStart; i < weightsAndIndicesOfZeros.length; i++) {
				swaps += Math.min(
					weightsAndIndicesOfZeros[i][0] - groupNoOfKOnes,
					k - weightsAndIndicesOfZeros[i][0] + groupNoOfKOnes
				);
				if (swaps >= min) return;
			}
			min = swaps;
		},
		handleOnes = i => {
			indicesOfOnes.push(i);
			if (indicesOfOnes.length < k) return;
			processRange();
			oneStart++;
			while (
				zeroStart < weightsAndIndicesOfZeros.length &&
				weightsAndIndicesOfZeros[zeroStart][1] < indicesOfOnes[oneStart]
			)
				zeroStart++;
			groupNoOfKOnes++;
		};
	for (let i = nums.findIndex(num => num); i < nums.length; i++)
		if (nums[i]) {
			handleOnes(i);
			if (!min) break;
		} else weightsAndIndicesOfZeros.push([indicesOfOnes.length, i]);
	return min;
};
minMoves([1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1], 2);
