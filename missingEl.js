function missingNumbers(arr, brr) {
	// Write your code here
	const f = {};
	let res = new Set();
	for (const num of arr) f[num] ? f[num]++ : (f[num] = 1);
	for (const num of brr) f[num] ? f[num]-- : res.add(num);
	res = Array.from(res);
	res.sort((a, b) => a - b);
	return res;
}
