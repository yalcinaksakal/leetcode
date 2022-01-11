/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
	let ans = 0,
		s;
	const findPals = (odd = 0) => {
		for (let i = 1; i <= 10 ** 9; i++) {
			s = (i + "").split("");
			if (odd) s.pop();
			s = (+(i + s.reverse().join(""))) ** 2 + "";
			// if (+s < +left) continue;
			// if (+s > +right) break;

			if (s == s.split("").reverse().join("")) {
				ans++;
				console.log(s, s.split("").reverse().join(""));
			}
		}
	};
	findPals();
	findPals(1);
	return ans;
};
console.log(
	superpalindromesInRange("40000000000000000", "5000000000000000000000")
);
