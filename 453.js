/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
	const n = nums.length;
	let sum = 0,
		min = 10 ** 9;
	for (const num of nums) {
		sum += num;
		min = Math.min(min, num);
	}
	let low = min,
		high = 10 ** 9,
		mid;
	while (low < high) {
		mid = Math.floor((low + high) / 2);
		mid * n < sum + (mid - min) * (n - 1) ? (low = mid + 1) : (high = mid);
	}
	return low - min;
};
// [1,2,3,6] min=1, sum=12, n=4, n-1=3
// low*n = sum => number of moves=low-min. In each move sum will increase by n-1
// 1 * 4 !=12   initial
// 2 * 4 !=15   first move 12+3
// 3 * 4 !=18   2nd 15 + 3
// 4 * 4 !=21
// 5 * 4 !=24
// 6 * 4 !=27
// 7 * 4 !=30
// 8 * 4 !=33
// 9 * 4  =36 ====> low=9, min=1, moves=9-1=8
minMoves([-1000000000, -1]);
