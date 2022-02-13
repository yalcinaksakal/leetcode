/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
	const length = mountainArr.length(),
		search = (
			compareFunc = x => mountainArr.get(x) < mountainArr.get(x + 1),
			high = length,
			low = 0
		) => {
			let mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (compareFunc(mid)) low = mid + 1;
				else high = mid;
			}
			return low;
		};

	const peak = search();
	let index = search(x => mountainArr.get(x) < target, peak);
	if (mountainArr.get(index) == target) return index;
	index = search(x => mountainArr.get(x) > target, length, peak);
	return mountainArr.get(index) == target ? index : -1;
};
