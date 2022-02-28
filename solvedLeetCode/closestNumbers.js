function closestNumbers(arr) {
	// Write your code here
	arr.sort((a, b) => a - b);
	let res = [arr[0], arr[1]],
		dif = arr[1] - arr[0],
		newDif;
	for (let i = 2; i < arr.length; i++) {
		newDif = arr[i] - arr[i - 1];
		if (newDif > dif) continue;
		if (newDif === dif) res.push(arr[i - 1], arr[i]);
		else {
			dif = newDif;
			res = [arr[i - 1], arr[i]];
		}
	}
	return res;
}
