var combinationSum = function (candidates, target) {
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
		if (curTotal >= target || index >= length) return;

		//continue with adding current candidate
		cur.push(candidates[index]);
		dfs(index, curTotal + candidates[index]);
		cur.pop();

		//add next candidate
		dfs(index + 1, curTotal);
	};

	dfs(0, 0);

	return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
