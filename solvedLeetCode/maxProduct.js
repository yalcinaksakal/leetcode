/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let max = null;

	nums
		.map(num => (!num ? "." : num))
		.join(",")
		.split(".")
		.map(e => e.split(","))
		.forEach(a => {
			a = a.reduce((acc, cur) => {
				cur = cur === "" ? 1 : +cur;
				return acc * cur;
			}, 1);
			max = max === null ? a : Math.max(max, a);
		});

	return max;
};
console.log(maxProduct([2, 3, -2, 4]));
