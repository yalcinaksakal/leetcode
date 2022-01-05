/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const res = [],
		parts = [];

	const isPal = s => s.split("").reverse().join("") === s;

	const partition = (start = 0) => {
		for (let i = start; i < s.length; i++) {
			const subStr = s.slice(start, i + 1);
			if (isPal(subStr))
				if (i === s.length - 1) res.push([...parts, subStr]);
				else {
					parts.push(subStr);
					partition(i + 1);
					parts.pop();
				}
		}
	};

	partition();
	// console.log(res);
	return res;
};

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition2 = function (s) {
	const res = [],
		dp = {};
	let j;
	for (let i = 0; i < s.length; i++) dp[i] = {};

	//l length, i start , j end index
	for (let l = 1; l <= s.length; l++)
		for (let i = 0; i < s.length - l + 1; i++) {
			j = i + l - 1;
			if (s[i] === s[j]) dp[i][j] = l < 4 ? true : dp[i + 1][j - 1];
		}

	const parts = [];
	const partition = (start = 0) => {
		for (let i = start; i < s.length; i++) {
			if (dp[start][i])
				if (i === s.length - 1) res.push([...parts, s.slice(start)]);
				else {
					parts.push(s.slice(start, i + 1));
					partition(i + 1);
					parts.pop();
				}
		}
	};

	partition();
	// console.log(res);
	return res;
};

partition("aab");
