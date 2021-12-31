/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	if (l < 2) return triangle[0][0];
	let curRow = [triangle[0][0]];

	const getRow = r => {
		const res = [];
		let cur;
		for (let j = 0; j < triangle[r].length; j++) {
			cur = triangle[r][j];
			cur +=
				j && j < triangle[r].length - 1
					? Math.min(curRow[j - 1], curRow[j])
					: !j
					? curRow[0]
					: curRow[j - 1];
			res.push(cur);
		}
		return [...res];
	};

	for (let i = 1; i < triangle.length; i++) curRow = getRow(i);
	return Math.min(...curRow);
};
