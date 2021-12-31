/**
 * @param {number[]} stones
 * @return {number}
 */

var lastStoneWeight = function (stones) {
	stones.sort((a, b) => a - b);
	let dif;

	while (stones.length > 1) {
		dif = Math.abs(stones.pop() - stones.pop());
		if (dif) {
			let low = 0,
				high = stones.length - 1,
				mid;
			while (low < high) {
				mid = (low + high) >>> 1;
				if (stones[mid] < dif) low = mid + 1;
				else high = mid;
			}
			if (!low && stones[0] > dif) stones.unshift(dif);
			else stones.splice(low, 0, dif);
		}
	}
	return stones.length ? stones[0] : 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
