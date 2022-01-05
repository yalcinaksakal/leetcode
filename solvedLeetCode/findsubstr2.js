/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
	const res = [],
		regex = new RegExp(`.{1,${words[0].length}}`, "g"),
		checkStr = words.sort().join("");

	const isConcat = subStr => subStr.match(regex).sort().join("") === checkStr;

	const comb = words.length * words[0].length,
		last = s.length - comb + 1;

	for (let i = 0; i < last; i++) {
		if (isConcat(s.slice(i, i + comb))) res.push(i);
	}

	return res;
};

const findSubstring1 = function (s, words) {
	const wordMap = {},
		wordLength = words[0].length,
		subStrLength = wordLength * words.length,
		numberOfWords = words.length,
		result = [];
	let wordMapSize = 1,
		patern = [];

	const coder = word => {
		if (wordMap[word]) return wordMap[word];
		wordMap[word] = wordMapSize;
		wordMapSize++;
		return wordMap[word];
	};

	const createPatern = w => {
		for (const word of w) patern.push(coder(word));
		patern = patern.sort((a, b) => a - b).join("");
	};

	const checkSubstr = subStr => {
		let paternToCompare = [],
			index,
			wordInString;
		for (let j = 0; j < numberOfWords; j++) {
			index = j * wordLength;
			wordInString = subStr.slice(index, index + wordLength);
			if (!wordMap[wordInString]) return false;
			paternToCompare.push(wordMap[wordInString]);
		}
		paternToCompare = paternToCompare.sort((a, b) => a - b).join("");

		return patern === paternToCompare;
	};

	createPatern(words);

	const lastIndex = s.length - subStrLength + 1;
	for (let i = 0; i < lastIndex; i++) {
		if (checkSubstr(s.slice(i, i + subStrLength))) result.push(i);
	}

	return result;
};

console.log(
	findSubstring1(
		"pjzkrkevzztxductzzxmxsvwjkxpvukmfjywwetvfnujhweiybwvvsrfequzkhossmootkmyxgjgfordrpapjuunmqnxxdrqrfgkrsjqbszgiqlcfnrpjlcwdrvbumtotzylshdvccdmsqoadfrpsvnwpizlwszrtyclhgilklydbmfhuywotjmktnwrfvizvnmfvvqfiokkdprznnnjycttprkxpuykhmpchiksyucbmtabiqkisgbhxngmhezrrqvayfsxauampdpxtafniiwfvdufhtwajrbkxtjzqjnfocdhekumttuqwovfjrgulhekcpjszyynadxhnttgmnxkduqmmyhzfnjhducesctufqbumxbamalqudeibljgbspeotkgvddcwgxidaiqcvgwykhbysjzlzfbupkqunuqtraxrlptivshhbihtsigtpipguhbhctcvubnhqipncyxfjebdnjyetnlnvmuxhzsdahkrscewabejifmxombiamxvauuitoltyymsarqcuuoezcbqpdaprxmsrickwpgwpsoplhugbikbkotzrtqkscekkgwjycfnvwfgdzogjzjvpcvixnsqsxacfwndzvrwrycwxrcismdhqapoojegggkocyrdtkzmiekhxoppctytvphjynrhtcvxcobxbcjjivtfjiwmduhzjokkbctweqtigwfhzorjlkpuuliaipbtfldinyetoybvugevwvhhhweejogrghllsouipabfafcxnhukcbtmxzshoyyufjhzadhrelweszbfgwpkzlwxkogyogutscvuhcllphshivnoteztpxsaoaacgxyaztuixhunrowzljqfqrahosheukhahhbiaxqzfmmwcjxountkevsvpbzjnilwpoermxrtlfroqoclexxisrdhvfsindffslyekrzwzqkpeocilatftymodgztjgybtyheqgcpwogdcjlnlesefgvimwbxcbzvaibspdjnrpqtyeilkcspknyylbwndvkffmzuriilxagyerjptbgeqgebiaqnvdubrtxibhvakcyotkfonmseszhczapxdlauexehhaireihxsplgdgmxfvaevrbadbwjbdrkfbbjjkgcztkcbwagtcnrtqryuqixtzhaakjlurnumzyovawrcjiwabuwretmdamfkxrgqgcdgbrdbnugzecbgyxxdqmisaqcyjkqrntxqmdrczxbebemcblftxplafnyoxqimkhcykwamvdsxjezkpgdpvopddptdfbprjustquhlazkjfluxrzopqdstulybnqvyknrchbphcarknnhhovweaqawdyxsqsqahkepluypwrzjegqtdoxfgzdkydeoxvrfhxusrujnmjzqrrlxglcmkiykldbiasnhrjbjekystzilrwkzhontwmehrfsrzfaqrbbxncphbzuuxeteshyrveamjsfiaharkcqxefghgceeixkdgkuboupxnwhnfigpkwnqdvzlydpidcljmflbccarbiegsmweklwngvygbqpescpeichmfidgsjmkvkofvkuehsmkkbocgejoiqcnafvuokelwuqsgkyoekaroptuvekfvmtxtqshcwsztkrzwrpabqrrhnlerxjojemcxel",
		[
			"dhvf",
			"sind",
			"ffsl",
			"yekr",
			"zwzq",
			"kpeo",
			"cila",
			"tfty",
			"modg",
			"ztjg",
			"ybty",
			"heqg",
			"cpwo",
			"gdcj",
			"lnle",
			"sefg",
			"vimw",
			"bxcb",
		]
	)
);
