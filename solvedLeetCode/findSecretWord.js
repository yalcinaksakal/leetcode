/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string[]} wordlist
 *     @param {Master} master
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} wordlist
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (wordlist, master) {
	let res,
		word,
		freq = Array(6)
			.fill()
			.map(() => ({}));

	wordlist = wordlist.map(w => ({ w, score: 0 }));

	const filter = c => {
		wordlist = wordlist.filter(w => {
			let count = 0;
			for (let i = 0; i < 6; i++) if (w[i] == word[i]) count++;
			return count == c;
		});
	};

	for (const w of wordlist)
		for (let i = 0; i < 6; i++)
			freq[i][w.w[i]] ? freq[i][w.w[i]]++ : (freq[i][w.w[i]] = 1);

	for (let i = 0; i < wordlist.length; i++)
		for (let j = 0; j < 6; j++) wordlist[i].score += freq[j][wordlist[i].w[j]];

	wordlist.sort((a, b) => a.score - b.score);
	wordlist = wordlist.map(w => w.w);
	freq = null;

	while (res != 6) {
		word = wordlist.pop();
		res = master.guess(word);
		filter(res);
	}
};

findSecretWord(
	[
		"pzrooh",
		"aaakrw",
		"vgvkxb",
		"ilaumf",
		"snzsrz",
		"qymapx",
		"hhjgwz",
		"mymxyu",
		"jglmrs",
		"yycsvl",
		"fuyzco",
		"ivfyfx",
		"hzlhqt",
		"ansstc",
		"ujkfnr",
		"jrekmp",
		"himbkv",
		"tjztqw",
		"jmcapu",
		"gwwwmd",
		"ffpond",
		"ytzssw",
		"afyjnp",
		"ttrfzi",
		"xkwmsz",
		"oavtsf",
		"krwjwb",
		"bkgjcs",
		"vsigmc",
		"qhpxxt",
		"apzrtt",
		"posjnv",
		"zlatkz",
		"zynlqc",
		"czajmi",
		"smmbhm",
		"rvlxav",
		"wkytta",
		"dzkfer",
		"urajfh",
		"lsroct",
		"gihvuu",
		"qtnlhu",
		"ucjgio",
		"xyycvd",
		"fsssoo",
		"kdtmux",
		"bxnppe",
		"usucra",
		"hvsmau",
		"gstvvg",
		"ypueay",
		"qdlvod",
		"djfbgs",
		"mcufib",
		"prohkc",
		"dsqgms",
		"eoasya",
		"kzplbv",
		"rcuevr",
		"iwapqf",
		"ucqdac",
		"anqomr",
		"msztnf",
		"tppefv",
		"mplbgz",
		"xnskvo",
		"euhxrh",
		"xrqxzw",
		"wraxvn",
		"zjhlou",
		"xwdvvl",
		"dkbiys",
		"zbtnuv",
		"gxrhjh",
		"ctrczk",
		"iwylwn",
		"wefuhr",
		"enlcrg",
		"eimtep",
		"xzvntq",
		"zvygyf",
		"tbzmzk",
		"xjptby",
		"uxyacb",
		"mbalze",
		"bjosah",
		"ckojzr",
		"ihboso",
		"ogxylw",
		"cfnatk",
		"zijwnl",
		"eczmmc",
		"uazfyo",
		"apywnl",
		"jiraqa",
		"yjksyd",
		"mrpczo",
		"qqmhnb",
		"xxvsbx",
	],
	10
);
