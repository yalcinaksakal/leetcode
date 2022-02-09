/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
var minOperationsMaxProfit = function (customers, boardingCost, runningCost) {
	let waiting = 0,
		profit = 0,
		maxProfit = 0,
		turn = 0,
		res = -1,
		boarded,
		i = 0;

	while (waiting > 0 || i < customers.length) {
		if (i < customers.length) waiting += customers[i++];
		boarded = Math.min(waiting, 4);
		waiting -= boarded;
		profit += boarded * boardingCost - runningCost;
		++turn;
		if (profit > maxProfit) {
			maxProfit = profit;
			res = turn;
		}
	}
	return res;
};
