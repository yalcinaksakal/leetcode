/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s, nEq = 1, i = 0, j = s.length - 1) {
	while (j > i) {
		if (s[i] !== s[j]) {
			if (!nEq) return false;
			return validPalindrome(s, 0, i, j - 1) || validPalindrome(s, 0, i + 1, j);
		}
		i++;
		j--;
	}

	return true;
};
