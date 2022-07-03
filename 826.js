/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
	difficulty = difficulty
		.map((d, i) => [d, profit[i]])
		.sort((a, b) => a[0] - b[0]);
	const difProfitOfJobs = [],
		bs = val => {
			let low = 0,
				mid,
				high = difProfitOfJobs.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				difProfitOfJobs[mid][0] < val ? (low = mid + 1) : (high = mid);
			}
			difProfitOfJobs[low][0] > val && low--;
			return low === -1 ? 0 : difProfitOfJobs[low][1];
		};
	let curProfit = 0;
	//determine maximum profit among the jobs whose difficulty is less than cur difficulty
	for (let i = 0; i < difficulty.length; i++) {
		curProfit = Math.max(difficulty[i][1], curProfit);
		difficulty[i][1] = curProfit;
		if (i + 1 < difficulty.length && difficulty[i][0] === difficulty[i + 1][0])
			continue;
		difProfitOfJobs.push(difficulty[i]);
	}
	curProfit = 0;
	for (const w of worker) curProfit += bs(w);
	return curProfit;
};
// console.log(
// 	maxProfitAssignment([2, 4, 6, 8, 10], [100, 20, 150, 40, 50], [4, 5, 6, 7])
// );
console.log(
	maxProfitAssignment(
		[23, 30, 35, 35, 43, 46, 47, 81, 83, 98],
		[8, 11, 11, 20, 33, 37, 60, 72, 87, 95],
		[95, 46, 47, 97, 11, 35, 99, 56, 41, 92]
	)
);
