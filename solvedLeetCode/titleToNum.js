/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
	let i = columnTitle.length - 1,
		digit = 1,
		res = 0;
	while (i > -1) {
		res += digit * (columnTitle[i].charCodeAt(0) - 64);
		digit *= 26;
		i--;
	}
	return res;
};

titleToNumber("A");
