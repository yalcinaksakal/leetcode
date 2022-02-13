/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
	let max = 0,
		res = -1,
		profit = 0,
		boarded;
	const rotate = (turn = 0, waiting = 0) => {
		if (profit > max) {
			max = profit;
			res = turn;
		}
		if (turn >= customers.length && !waiting) return;

		customers[turn] && (waiting += customers[turn]);
		boarded = waiting >= 4 ? 4 : waiting;
		waiting -= boarded;
		profit += boarded * boardingCost - runningCost;

		rotate(turn + 1, waiting);
	};

	rotate();
	return res;
};
console.log(minOperationsMaxProfit([8, 3], 5, 6));
