/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
	let res = 0,
		isSub;
	const visit = (i, j) => {
		if (!grid2[i] || !grid2[i][j]) return;
		!grid1[i][j] && (isSub = false);
		grid2[i][j] = 0;
		visit(i + 1, j);
		visit(i - 1, j);
		visit(i, j + 1);
		visit(i, j - 1);
	};
	for (let i = 0; i < grid2.length; i++)
		for (let j = 0; j < grid2[0].length; j++)
			if (grid2[i][j]) {
				isSub = true;
				visit(i, j);
				isSub && res++;
			}
	return res;
};
