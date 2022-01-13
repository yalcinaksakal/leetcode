/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
	let res = numBottles;
	let empty = res,
		full;

	while (empty >= numExchange) {
		full = Math.floor(empty / numExchange);
		empty %= numExchange;
		empty += full;
		res += full;
	}
	return res;
};
