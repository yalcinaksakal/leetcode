/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
	const find = (val, target) => {
		const res = (val + "").padStart(2, "0");
		return (target[0] === "?" || res[0] === target[0]) &&
			(target[1] === "?" || res[1] === target[1])
			? res
			: find(val - 1, target);
	};
	time = time.split(":");
	return find(23, time[0]) + ":" + find(59, time[1]);
};
