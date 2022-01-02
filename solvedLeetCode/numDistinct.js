/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var numDistinct = function (s, t) {
	const m = s.length,
		n = t.length,
		dp = Array(n + 1)
			.fill()
			.map(arr => Array(m + 1).fill(0));
	//no more chars left from t, first row=1
	//no more chars left from s, first column=0
	//no more chars from s and t, [0][0]=1;
	for (let j = 0; j < m + 1; j++) dp[0][j] = 1;

	for (let i = 0; i < n; i++)
		for (let j = 0; j < m; j++) {
			dp[i + 1][j + 1] = dp[i + 1][j] + (t[i] === s[j] ? dp[i][j] : 0);
		}
	return dp[lT][lS];
};
var numDistinct1 = function (s, t) {
	const lS = s.length,
		lT = t.length,
		map = {};

	const dfs = (indexS, indexT) => {
		if (indexT === lT) return 1;
		if (indexS === lS) return 0;
		if (map[[indexS, indexT]]) return map[[indexS, indexT]];

		map[[indexS, indexT]] =
			s[indexS] === t[indexT]
				? dfs(indexS + 1, indexT + 1) + dfs(indexS + 1, indexT)
				: dfs(indexS + 1, indexT);
		return map[[indexS, indexT]];
	};

	console.log(dfs(0, 0), map);
	// return dfs(0, 0);
};
numDistinct("safarabbsafasbitfsaf", "rabbit");
numDistinct("babgbag", "bag");

numDistinct(
	"adbdadeecadeadeccaeaabdabdbcdabddddabcaaadbabaaedeeddeaeebcdeabcaaaeeaeeabcddcebddebeebedaecccbdcbcedbdaeaedcdebeecdaaedaacadbdccabddaddacdddc",
	"bcddceeeebecbc"
);

numDistinct(
	"xslledayhxhadmctrliaxqpokyezcfhzaskeykchkmhpyjipxtsuljkwkovmvelvwxzwieeuqnjozrfwmzsylcwvsthnxujvrkszqwtglewkycikdaiocglwzukwovsghkhyidevhbgffoqkpabthmqihcfxxzdejletqjoxmwftlxfcxgxgvpperwbqvhxgsbbkmphyomtbjzdjhcrcsggleiczpbfjcgtpycpmrjnckslrwduqlccqmgrdhxolfjafmsrfdghnatexyanldrdpxvvgujsztuffoymrfteholgonuaqndinadtumnuhkboyzaqguwqijwxxszngextfcozpetyownmyneehdwqmtpjloztswmzzdzqhuoxrblppqvyvsqhnhryvqsqogpnlqfulurexdtovqpqkfxxnqykgscxaskmksivoazlducanrqxynxlgvwonalpsyddqmaemcrrwvrjmjjnygyebwtqxehrclwsxzylbqexnxjcgspeynlbmetlkacnnbhmaizbadynajpibepbuacggxrqavfnwpcwxbzxfymhjcslghmajrirqzjqxpgtgisfjreqrqabssobbadmtmdknmakdigjqyqcruujlwmfoagrckdwyiglviyyrekjealvvigiesnvuumxgsveadrxlpwetioxibtdjblowblqvzpbrmhupyrdophjxvhgzclidzybajuxllacyhyphssvhcffxonysahvzhzbttyeeyiefhunbokiqrpqfcoxdxvefugapeevdoakxwzykmhbdytjbhigffkmbqmqxsoaiomgmmgwapzdosorcxxhejvgajyzdmzlcntqbapbpofdjtulstuzdrffafedufqwsknumcxbschdybosxkrabyfdejgyozwillcxpcaiehlelczioskqtptzaczobvyojdlyflilvwqgyrqmjaeepydrcchfyftjighntqzoo",
	"rwmimatmhydhbujebqehjprrwfkoebcxxqfktayaaeheys"
);
