/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	const sort = str => str.split("").sort().join("");
	s1 = sort(s1);

	for (let i = 0; i < s2.length; i++) {
		if (s1[0] !== s2[i]) continue;
		if (s2.length - s1.length + 1 > i) {
			if (s1 === sort(s2.slice(i, i + s1.length))) return true;
		}
		if (i - s1.length < -1) continue;
		if (s1 === sort(s2.slice(i - s1.length + 1, i + 1))) return true;
	}
	return false;
};
console.log(checkInclusion("adc", "dcda"));
