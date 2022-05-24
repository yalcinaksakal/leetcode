/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b);
	let res = [],
		dif,
		minDif = arr[1] - arr[0];
	for (let i = 1; i < arr.length; i++) {
		dif = arr[i] - arr[i - 1];
		if (dif < minDif) {
			minDif = dif;
			res = [];
		}
		dif === minDif && res.push([arr[i - 1], arr[i]]);
	}
	return res;
};
minimumAbsDifference([4, 2, 1, 3]);
