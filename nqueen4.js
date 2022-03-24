/**
 * @param {number} n
 * @return {number}
 */
var solveNQueens = function (n) {
	const rows = Array(n).fill(1),
		rD = Array(2 * n - 1).fill(1),
		lD = Array(2 * n - 1).fill(1),
		res = [],
		pos = [],
		setBoard = (index, val) => {
			rows[index] = val;
			rD[index + q] = val;
			lD[q - index + n - 1] = val;
		},
		dfs = () => {
			if (q == n) {
				const sol = [];
				for (const [_, y] of pos)
					sol.push(".".repeat(y) + "Q" + ".".repeat(n - y - 1));
				res.push(sol);
				return;
			}
			for (let i = 0; i < n; i++)
				if (rows[i] && rD[i + q] && lD[q - i + n - 1]) {
					setBoard(i, 0);
					pos.push([q, i]);
					q++;
					dfs();
					q--;
					setBoard(i, 1);
					pos.pop();
				}
		};

	let q = 0;
	dfs();
	return res;
};

// left Diagonal =lD  index=j-i + n - 1 count=2*n-1
// \
//  \
//   \

// right Diagonal =rD  index=i+j count=2*n-1
//   /
//  /
// /
