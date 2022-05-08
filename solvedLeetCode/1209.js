/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
	const chars = [];
	for (const char of s) {
		chars.length && char === chars[chars.length - 1][0]
			? chars[chars.length - 1][1]++
			: chars.push([char, 1]);
		chars[chars.length - 1][1] === k && chars.pop();
	}
	return chars.reduce((acc, cur) => acc + cur[0].repeat(cur[1]), "");
};
console.log(removeDuplicates("deeedbbcccbdaa", 3));
