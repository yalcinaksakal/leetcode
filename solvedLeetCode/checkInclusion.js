/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	const sort = str => str.split("").sort().join("");
	s1 = sort(s1);

	for (let i = 0; i < s2.length - s1.length + 1; i++)
		if (s1 === sort(s2.slice(i, i + s1.length))) return true;

	return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
