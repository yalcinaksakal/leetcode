/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
	arr.sort((a, b) => a - b);
	let max = 1;
	for (let i = 1; i < arr.length; i++)
		arr[i] <= max + 1 ? (max = arr[i]) : max++;
	return max;
};
