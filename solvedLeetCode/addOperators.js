/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
	const n = num.length;
	const res = [];

	const dfs = (i, path, resSoFar, prevNum) => {
		if (i == n) {
			if (resSoFar == target) res.push(path);
			return;
		}
		for (let j = i; j < num.length; j++) {
			if (j > i && num[i] == "0") break;
			const curNum = +num.slice(i, j + 1);

			if (i == 0) dfs(j + 1, path + curNum, curNum, curNum);
			else {
				dfs(j + 1, path + "+" + curNum, resSoFar + curNum, curNum);
				dfs(j + 1, path + "-" + curNum, resSoFar - curNum, -curNum);
				dfs(
					j + 1,
					path + "*" + curNum,
					resSoFar - prevNum + prevNum * curNum,
					prevNum * curNum
				);
			}
		}
	};

	dfs(0, "", 0, 0);
	return res;
};
