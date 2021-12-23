/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	let l = s.length - 1;

	let prev1 = s[l] === "0" ? 0 : 1;
	if (!l) return prev1;

	let lastTwo = +(s[l - 1] + s[l]);
	let prev2 =
		s[l - 1] === "0" || (lastTwo > 26 && s[l] === "0")
			? 0
			: lastTwo > 26 || lastTwo === 10 || lastTwo === 20
			? 1
			: 2;
	if (l === 1) return prev2;

	l -= 2;

	let numOfPossibilities = 0;

	while (l >= 0) {
		lastTwo = +(s[l] + s[l + 1]);
		numOfPossibilities = s[l] === "0" ? 0 : prev2 + (lastTwo < 27 ? prev1 : 0);
		prev1 = prev2;
		prev2 = numOfPossibilities;
		l--;
	}

	return prev2;
};
