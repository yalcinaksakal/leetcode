/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function (arr1, arr2) {
	let case1Max = arr1[0] + arr2[0],
		case1Min = arr1[0] + arr2[0],
		case2Max = arr1[0] - arr2[0],
		case2Min = arr1[0] - arr2[0],
		case3Max = arr2[0] - arr1[0],
		case3Min = arr2[0] - arr1[0],
		case4Max = arr2[0] + arr1[0],
		case4Min = arr2[0] + arr1[0];
	for (let i = 1; i < arr1.length; i++) {
		case1Max = Math.max(case1Max, arr1[i] + arr2[i] - i);
		case1Min = Math.min(case1Min, arr1[i] + arr2[i] - i);

		case2Max = Math.max(case2Max, arr1[i] - arr2[i] - i);
		case2Min = Math.min(case2Min, arr1[i] - arr2[i] - i);

		case3Max = Math.max(case3Max, arr2[i] - arr1[i] - i);
		case3Min = Math.min(case3Min, arr2[i] - arr1[i] - i);

		case4Max = Math.max(case4Max, arr2[i] + arr1[i] + i);
		case4Min = Math.min(case4Min, arr2[i] + arr1[i] + i);
	}
	return Math.max(
		case1Max - case1Min,
		case2Max - case2Min,
		case3Max - case3Min,
		case4Max - case4Min
	);
};
