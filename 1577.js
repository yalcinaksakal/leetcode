/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var numTriplets = function (nums1, nums2) {
	const squares = [],
		addSquares = arr => {
			const sqFreq = {};
			let sq;
			for (let i = 0; i < arr.length; i++) {
				sq = arr[i] ** 2;
				sqFreq[sq] ? sqFreq[sq]++ : (sqFreq[sq] = 1);
			}
			return sqFreq;
		},
		getMultiplications = type => {
			const arr = type ? nums1 : nums2,
				sqFreq = squares[type];
			let count = 0,
				m;
			for (let i = 0; i < arr.length; i++)
				for (let j = i + 1; j < arr.length; j++) {
					m = arr[i] * arr[j];
					sqFreq[m] && (count += sqFreq[m]);
				}
			return count;
		};
	squares.push(addSquares(nums1), addSquares(nums2));
	return getMultiplications(0) + getMultiplications(1);
};
