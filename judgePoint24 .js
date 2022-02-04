/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function (cards) {
	const calc2 = (a, b) =>
		Math.abs(a + b - 24.0) < 0.001 ||
		Math.abs(a - b - 24.0) < 0.001 ||
		Math.abs(a * b - 24.0) < 0.001 ||
		(b && Math.abs(a / b - 24.0) < 0.001);
	const calc3 = (a, b, c) =>
		calc2(a + b, c) ||
		calc2(a - b, c) ||
		calc2(a * b, c) ||
		(b && calc2(a / b, c)) ||
		calc2(a, b + c) ||
		calc2(a, b - c) ||
		calc2(a, b * c) ||
		(c && calc2(a, b / c));

	const calc4 = (a, b, c, d) =>
		calc3(a + b, c, d) ||
		calc3(a - b, c, d) ||
		calc3(a * b, c, d) ||
		(b != 0 && calc3(a / b, c, d)) ||
		calc3(a, b + c, d) ||
		calc3(a, b - c, d) ||
		calc3(a, b * c, d) ||
		(c != 0 && calc3(a, b / c, d)) ||
		calc3(a, b, c + d) ||
		calc3(a, b, c - d) ||
		calc3(a, b, c * d) ||
		(d != 0 && calc3(a, b, c / d));

	for (let i = 0; i < 4; i++)
		for (let j = 0; j < 4; j++) {
			if (i == j) continue;
			for (let k = 0; k < 4; k++) {
				if (i == k || j == k) continue;
				if (calc4(cards[i], cards[j], cards[k], cards[6 - i - j - k]))
					return true;
			}
		}
	return false;
};
//op 0* 1/ 2+ 3-
// (ab)(cd)
// a(bc)d
// (abc)d
// a(bcd)
// abcd
// 4!*4*4*4* 5 = 7680
