/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let five = 0,
		ten = 0;
	for (const bill of bills) {
		if (bill === 10) {
			if (!five) return false;
			five--;
			ten++;
			continue;
		}
		if (bill === 20) {
			if ((!five || !ten) && five < 3) return false;
			if (ten) {
				five--;
				ten--;
			} else five -= 3;
			continue;
		}
		five++;
	}
	return true;
};
console.log(
	lemonadeChange([
		5, 5, 10, 20, 5, 5, 5, 5, 5, 5, 5, 5, 5, 10, 5, 5, 20, 5, 20, 5,
	])
);
console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 20, 5]));
