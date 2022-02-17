function waiter(number, q) {
	let i = 0,
		j,
		prime = 2;
	const ans = [],
		isPrime = num => {
			const sqrtnum = Math.floor(Math.sqrt(num));
			for (let i = 2; i < sqrtnum + 1; i++) if (!(num % i)) return false;
			return true;
		},
		getNextPrime = num => {
			while (!isPrime(num)) num++;
			return num;
		};

	while (i++ < q) {
		j = 0;
		while (j < number.length) {
			if (number[j] % prime) {
				j++;
				continue;
			}
			ans.push(number[j]);
			number.splice(j, 1);
		}
		if (number.length) {
			prime = getNextPrime(prime + 1);
			number.reverse();
		}
	}
	if (number.length) ans.push(...number.reverse());
	return ans;
}
