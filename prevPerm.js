/**
 * @param {number[]} arr
 * @return {number[]}
 */
var prevPermOpt1 = function (arr) {
	for (let i = arr.length - 2; i > -1; i--)
		if (arr[i] > arr[i + 1]) {
			let k = i + 1;
			for (let j = arr.length - 1; j > i; j--)
				if (arr[i] > arr[j] && arr[j] > arr[k]) k = j;
			const tmp = arr[k];
			arr[k] = arr[i];
			arr[i] = tmp;
			break;
		}
	return arr;
};
