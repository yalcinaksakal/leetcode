// 6014. Construct String With Repeat Limit
/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
	let chars = {};
	for (const ch of s) chars[ch] ? chars[ch]++ : (chars[ch] = 1);
	chars = Object.entries(chars).sort((a, b) => {
		if (a[0] < b[0]) return -1;
	});
	let res = "",
		repeat,
		ch;
	while (chars.length) {
		ch = chars.pop();
		while (ch[1]) {
			repeat = Math.min(repeatLimit, ch[1]);
			ch[1] -= repeat;
			res += ch[0].repeat(repeat);
			if (ch[1]) {
				if (!chars.length) return res;
				res += chars[chars.length - 1][0];
				chars[chars.length - 1][1]--;
				if (!chars[chars.length - 1][1]) chars.pop();
			}
		}
	}
	return res;
};
