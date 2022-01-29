/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
	const exact = {},
		err = {};
	const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
	for (let i = 0; i < wordlist.length; i++) {
		exact[wordlist[i]] = i;
		const w = wordlist[i].toLowerCase();
		if (err[w] == undefined) err[w] = i;
		let v = "";
		for (const c of w) v += vowels[c] ? "_" : c;
		if (err[v] == undefined) err[v] = i;
	}

	const res = [];
	for (let q of queries) {
		let w = "";
		if (exact[q]) w = wordlist[exact[q]];
		else {
			q = q.toLowerCase();
			if (err[q] != undefined) w = wordlist[err[q]];
			else {
				let v = "";
				for (const c of q) v += vowels[c] ? "_" : c;
				if (err[v] != undefined) w = wordlist[err[v]];
			}
		}
		res.push(w);
	}
	return res;
};

spellchecker(
	["KiTe", "kite", "hare", "Hare"],
	[
		"kite",
		"Kite",
		"KiTe",
		"Hare",
		"HARE",
		"Hear",
		"hear",
		"keti",
		"keet",
		"keto",
	]
);
