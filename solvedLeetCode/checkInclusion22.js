/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	const freq = {};
	let curLength = s1.length,
		start;
	for (const c of s1) freq[c] ? freq[c]++ : (freq[c] = 1);

	for (let i = 0; i < s2.length; i++) {
		if (i >= s1.length) {
			start = s2[i - s1.length];
			if (freq[start] != undefined) {
				freq[start]++;
				if (freq[start] > 0) curLength++;
			}
		}
		if (freq[s2[i]] != undefined) {
			if (freq[s2[i]] > 0) curLength--;
			freq[s2[i]]--;
			if (!curLength) return true;
		}
	}
	return false;
};
console.log(checkInclusion("adc", "dcda"));
