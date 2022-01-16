/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	boxTypes.sort((a, b) => a[1] - b[1]);

	let box,
		res = 0;

	while (truckSize > 0 && boxTypes.length) {
		box = boxTypes.pop();
		res += Math.min(truckSize, box[0]) * box[1];
		truckSize -= box[0];
	}

	return res;
};
