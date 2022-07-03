/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
	const ans = Array(rains.length).fill(-1),
		lastRainOnTheCity = {},
		dryingDays = [],
		assignDryingDay = (val, city) => {
			let low = 0,
				mid,
				high = dryingDays.length - 1;
			while (low < high) {
				mid = (low + high) >>> 1;
				dryingDays[mid] < val ? (low = mid + 1) : (high = mid);
			}
			dryingDays[low] < val && low++;
			if (low === dryingDays.length) return false;
			ans[dryingDays.splice(low, 1)] = city;
			return true;
		};

	for (let i = 0; i < rains.length; i++)
		if (!rains[i]) {
			dryingDays.push(i);
			ans[i] = 1;
		} else {
			if (
				lastRainOnTheCity[rains[i]] !== undefined &&
				!assignDryingDay(lastRainOnTheCity[rains[i]], rains[i])
			)
				return [];
			lastRainOnTheCity[rains[i]] = i;
		}

	return ans;
};
// console.log(avoidFlood([1, 2, 0, 0, 0, 2, 1]));
// console.log(avoidFlood([1, 2, 0, 1, 2]));

// console.log(avoidFlood([1, 0, 2, 0]));
console.log(avoidFlood([0, 1, 1]));
