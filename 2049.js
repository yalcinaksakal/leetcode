/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
	let maxCount = 0,
		maxScore = 0;
	const childrenOfNode = {},
		nodesExceptSelf = parents.length - 1,
		dfs = node => {
			let count = 0,
				curScore = 1;
			childrenOfNode[node]?.forEach(child => {
				const childCount = dfs(child);
				count += childCount;
				curScore *= childCount;
			});
			const parentScore = nodesExceptSelf - count;
			parentScore && (curScore *= parentScore);
			if (curScore > maxScore) {
				maxScore = curScore;
				maxCount = 1;
			} else if (curScore === maxScore) maxCount++;
			return count + 1;
		};

	for (let i = 1; i < parents.length; i++) {
		childrenOfNode[parents[i]]
			? childrenOfNode[parents[i]].push(i)
			: (childrenOfNode[parents[i]] = [i]);
	}
	dfs(0);
	return maxCount;
};
