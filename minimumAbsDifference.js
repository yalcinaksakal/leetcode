/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);

	let res = [],
		dif,
		mindif = null;

	for (i = 1; i < arr.length; i++) {
		dif = arr[i] - arr[i - 1];
		if (mindif === null || dif < mindif) {
			mindif = dif;
			res = [];
		}
		if (dif === mindif) res.push([arr[i - 1], arr[i]]);
	}

	return res;
};
