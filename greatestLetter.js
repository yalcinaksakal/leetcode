/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
	let res = "";
	const letters = {};
	for (const ch of s) {
		if (ch.toLowerCase() === ch)
			letters[ch.toUpperCase()] && res < ch && (res = ch);
		else
			letters[ch.toLowerCase()] &&
				res < ch.toLowerCase() &&
				(res = ch.toLowerCase());
		letters[ch] = true;
	}
	return res.toUpperCase();
};

greatestLetter("arzif");
