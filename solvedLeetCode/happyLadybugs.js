function happyLadybugs(b) {
	// Write your code here
	const freq = {};
	let isHappy = true;
	for (let i = 0; i < b.length; i++) {
		freq[b[i]] ? freq[b[i]]++ : (freq[b[i]] = 1);
		if (b[i] !== "_" && isHappy) {
			isHappy = b[i - 1] === b[i];
			if (!isHappy) isHappy = b[i] === b[i + 1];
		}
	}
	if (isHappy) return "YES";
	if (!freq["_"]) return "NO";
	delete freq["_"];
	return Object.values(freq).findIndex(el => el === 1) === -1 ? "YES" : "NO";
}
