/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	const pChars = {},
		res = [];
	let cur,
		total = 0,
		ch;

	for (const ch of p) pChars[ch] ? pChars[ch]++ : (pChars[ch] = 1);
	cur = { ...pChars };
	const clear = j => {
		const process = () => {
			total--;
			cur[s[j]]++;
			j++;
		};
		while (s[j] !== ch) process();
		process();
	};

	for (let i = 0; i < s.length; i++) {
		ch = s[i];
		if (!pChars[ch]) {
			cur = { ...pChars };
			total = 0;
			continue;
		}
		if (!cur[ch]) clear(i - total);

		cur[ch]--;
		total++;
		if (total === p.length) {
			res.push(i - total + 1);
			cur[s[i - total + 1]]++;
			total--;
		}
	}
	console.log(res);
	return res;
};

findAnagrams("abacbabc", "abc");

var findAnagrams1 = function (s, p) {
	const sort = s => s.split("").sort().join("");
	const end = s.length - p.length + 1,
		res = [];
	p = sort(p);

	for (let i = 0; i < end; i++)
		if (p === sort(s.slice(i, i + p.length))) res.push(i);

	return res;
};
