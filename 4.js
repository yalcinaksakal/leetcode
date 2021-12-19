/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kIncreasing = function (arr, k) {
	let res = 0;

	for (let i = 0; i < arr.length - k; i++) {
		if (arr[i] > arr[i + k]) {
			arr[i + k] = arr[i];
			res++;
		}
	}

	return res;
};

console.log(
	kIncreasing([12, 6, 12, 6, 14, 2, 13, 17, 3, 8, 11, 7, 4, 11, 18, 8, 8, 3], 1)
);
