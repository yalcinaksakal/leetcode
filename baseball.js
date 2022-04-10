/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
	const scores = [];
	for (const s of ops)
		switch (s) {
			case "+":
				scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
				break;
			case "C":
				scores.pop();
				break;
			case "D":
				scores.push(scores[scores.length - 1] * 2);
				break;
			default:
				scores.push(+s);
		}
	return scores.reduce((a, c) => a + c, 0);
};
