/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function (s, t) {
	const map = {},
		tSet = new Set();
	for (let i = 0; i < s.length; i++) {
		if (!map[s[i]]) {
			if (tSet.has(t[i])) return false;
			map[s[i]] = t[i];
			tSet.add(t[i]);
		}
		if (t[i] !== map[s[i]]) return false;
	}
	return true;
};
var isIsomorphic1 = function (s, t) {
	const check = str => {
		const map = {};
		let res = "",
			j = 0;
		for (let i = 0; i < str.length; i++) {
			if (!map[str[i]]) {
				map[str[i]] = j + ".";
				j++;
			}
			res += map[str[i]];
		}
		return res;
	};

	return check(s) === check(t);
};

console.log(isIsomorphic("paper", "title"));

console.log(
	isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck")
);
