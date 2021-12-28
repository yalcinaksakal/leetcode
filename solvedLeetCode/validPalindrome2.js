/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {
	const length = s.length - 1;
	let left = length >>> 1,
		right = length - left;

	const check = (l, r) => {
		if (l < 0) return true;

		if (s[l] === s[r]) return check(l - 1, r + 1);

		return false;
	};

	return check(left, right);
};

console.log(validPalindrome("abac"));
