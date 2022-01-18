/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
	const temp = [];

	for (let i = 0; i < arr.length; i++)
		if (temp.length) {
			temp.push(arr[i]);
			if (!arr[i]) temp.push(arr[i]);
			arr[i] = temp.shift();
		} else if (!arr[i]) temp.push(0);

	// console.log(arr);
};
