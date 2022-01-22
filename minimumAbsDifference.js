/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);

	let res = [],
		dif,
		mindif = arr[1] - arr[0] + 1;

	for (i = 1; i < arr.length; i++) {
		dif = arr[i] - arr[i - 1];
		if (dif < mindif) {
			mindif = dif;
			res = [];
		}
		if (dif === mindif) res.push([arr[i - 1], arr[i]]);
	}

	return res;
};
