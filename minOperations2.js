/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
	// {total, number of nonempty boxes pre or post}
	const preSum = [{ t: 0, b: 0 }],
		postSum = [{ t: 0, b: 0 }],
		res = [];
	for (let i = 1; i < boxes.length; i++) {
		preSum.push({ t: preSum[i - 1].t + preSum[i - 1].b, b: preSum[i - 1].b });
		if (boxes[i - 1] === "1") {
			preSum[i].t++;
			preSum[i].b++;
		}

		postSum.unshift({ t: postSum[0].t + postSum[0].b, b: postSum[0].b });
		if (boxes[boxes.length - i] === "1") {
			postSum[0].t++;
			postSum[0].b++;
		}
	}

	console.log(preSum, postSum);

	for (let i = 0; i < boxes.length; i++) res.push(preSum[i].t + postSum[i].t);

	return res;
};

minOperations("001011");
