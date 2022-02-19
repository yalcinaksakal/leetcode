function counterGame(n, turn = 0) {
	// Write your code here
	if (n === 1) return turn ? "Richard" : "Louise";
	let count = 0;
	while (2 ** count < n) count++;
	n = 2 ** count === n ? n / 2 : n - 2 ** (count - 1);
	return counterGame(n, 1 - turn);
}
