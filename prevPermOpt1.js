/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
	const n = arr.length;
	let i = n - 2;
	while (i >= 0 && arr[i] <= arr[i + 1]) i--;
	if (i == -1) return arr;
	let j = n - 1;
	while (j > i && arr[j] >= arr[i]) j--;
	while (j > i && arr[j] == arr[j - 1]) j--;
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
};
