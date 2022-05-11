/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	const comb = [],
		res = [],
		dfs = (num, curSum) => {
			comb.length === k && curSum === n && res.push([...comb]);
			if (curSum >= n || comb.length === k) return;
			for (let i = num; i < 10; i++) {
				comb.push(i);
				dfs(i + 1, curSum + i);
				comb.pop();
			}
		};
	dfs(1, 0);
	return res;
};
console.log(combinationSum3(3, 7));
