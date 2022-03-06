/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	let p = 1;
	return (
		-(n + "").split("").reduce((a, c) => {
			c = +c;
			p *= c;
			return a + c;
		}, 0) + p
	);
};
