/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
	const subs = {},
		split = (str, i) => {
			if (i == s.length || !str) return 0;
			const prev = str.slice(0, i + 1);
			let count;
			if (subs[prev]) count = split(str.slice(i + 1), 0);
			else {
				subs[prev] = true;
				count = 1 + split(str.slice(i + 1), 0);
				subs[prev] = undefined;
			}
			return Math.max(count, split(str, i + 1));
		};
	return split(s, 0);
};
// console.log(maxUniqueSplit("aba"));
// console.log(maxUniqueSplit("wwwzfvedwfvhsww"));

console.log(maxUniqueSplit("addbsd"));
