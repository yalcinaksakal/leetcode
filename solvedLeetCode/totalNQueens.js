/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
	const rows = Array(n).fill(1),
		rD = Array(2 * n - 1).fill(1),
		lD = Array(2 * n - 1).fill(1);

	let q = 0,
		res = 0;

	const setBoard = (index, val) => {
		rows[index] = val;
		rD[index + q] = val;
		lD[q - index + n - 1] = val;
	};
	const dfs = () => {
		if (q == n) {
			res++;
			return;
		}
		for (let i = 0; i < n; i++) {
			if (rows[i] && rD[i + q] && lD[q - i + n - 1]) {
				setBoard(i, 0);
				q++;
				dfs();
				q--;
				setBoard(i, 1);
			}
		}
	};

	dfs();
	return res;
};
console.log(totalNQueens(15));
// leftt Diagonal =lD  index=j-i + n - 1 count=2*n-1
// \
//  \
//   \

// right Diagonal =rD  index=i+j count=2*n-1
//   /
//  /
// /
