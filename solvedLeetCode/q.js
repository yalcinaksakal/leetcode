/**
 * @param {number} m
 * @param {number} n
 * @param {number} introvertsCount
 * @param {number} extrovertsCount
 * @return {number}
 */
var getMaxGridHappiness = function (m, n, introvertsCount, extrovertsCount) {
	let max = 0;

	const place = (i, j, h, int, ext, prevRow, curRow) => {
		if (!int && !ext) return;
		const ni = j + 1 == n ? i + 1 : i,
			nj = j + 1 == n ? 0 : j + 1;

		if (ni < m && !(int < 0 || ext < 0))
			place(ni, nj, h, int, ext, [...prevRow], [...curRow]);

		let nh = h;
		if (ni < m && !(int - 1 < 0 || ext < 0)) {
			curRow[j] = 1;
			nh += 120;
			if (prevRow[j] == 1) nh -= 60;
			else if (prevRow[j] == 2) nh -= 10;
			if (j) {
				if (curRow[j - 1] == 1) nh -= 60;
				else if (curRow[j - 1] == 2) nh -= 10;
			}
			if (nh > max) max = nh;

			place(
				ni,
				nj,
				nh,
				int - 1,
				ext,
				nj ? [...prevRow] : [...curRow],
				nj ? [...curRow] : Array(n).fill(0)
			);
		}
		if (ni < m && !(int < 0 || ext - 1 < 0)) {
			nh = h;
			curRow[j] = 2;
			nh += 40;
			if (prevRow[j - 1] == 1) nh -= 10;
			else if (prevRow[j - 1] == 2) nh += 40;
			if (curRow[j - 1] == 1) nh -= 10;
			else if (curRow[j - 1] == 2) nh += 40;
			if (nh > max) max = nh;

			place(
				ni,
				nj,
				nh,
				int,
				ext - 1,
				nj ? [...prevRow] : [...curRow],
				nj ? [...curRow] : Array(n).fill(0)
			);
		}
	};

	place(
		0,
		0,
		0,
		introvertsCount,
		extrovertsCount,
		Array(n).fill(0),
		Array(n).fill(0)
	);

	return max;
};
getMaxGridHappiness(2, 2, 4, 0);
