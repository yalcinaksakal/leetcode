/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	const sort = s => s.split("").sort().join("");

	return sort(s) === sort(t);
};

console.log(isAnagram("Ņdasd", "dasdŅ"));
