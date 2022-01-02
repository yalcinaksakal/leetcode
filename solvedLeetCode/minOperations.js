/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
	const preSum = [[]],
		postSum = [[]],
		res = [];
	for (let i = 1; i < boxes.length; i++) {
		preSum.push([...preSum[i - 1]]);
		if (boxes[i - 1] === "1") preSum[i].push(i - 1);

		postSum.unshift([...postSum[0]]);
		if (boxes[boxes.length - i] === "1") postSum[0].push(boxes.length - i);
	}

	// console.log(preSum,postSum);
	let sum;
	for (let i = 0; i < boxes.length; i++) {
		sum = 0;
		sum += preSum[i].reduce((acc, cur) => acc + i - cur, 0);
		sum += postSum[i].reduce((acc, cur) => acc + cur - i, 0);
		res.push(sum);
	}

	return res;
};
