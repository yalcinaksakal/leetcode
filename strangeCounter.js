function strangeCounter(t) {
	let range = 3;
	while (t > range) {
		t -= range;
		range *= 2;
	}
	return range - t + 1;
}
