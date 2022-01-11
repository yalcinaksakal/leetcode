/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	const result = [],
		cur = [];
	const length = candidates.length;

	const dfs = (index, curTotal) => {
		//reached to the target
		if (curTotal === target) {
			result.push([...cur]);
			return;
		}

		//there is not any candidate to choose or curTotal exceeded target
		if (curTotal > target || index >= length) return;

		cur.push(candidates[index]);
		dfs(index + 1, curTotal + candidates[index]);
		cur.pop();

		dfs(index + 1, curTotal);
	};

	dfs(0, 0);

	return result;
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
