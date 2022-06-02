/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
	const firstOccurence = Array(3).fill(s.length);
	let count = 0;
	for (let i = s.length - 1; i > -1; i--) {
		//char code of a,b,c are 97,98,99
		firstOccurence[s.charCodeAt(i) - 97] = i;
		count += s.length - Math.max(...firstOccurence);
	}
	return count;
};

numberOfSubstrings("abcabc");
