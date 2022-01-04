/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
//Eulers theorem  p primes of n, phi(n)=(1-1/p1)....(1-1/pm)*n
//primes of 1337=7,191  1337* 6/7 * 190/191 =1140
//a**b % 1337 = a**(b % phi(1337)) % 1337   phi(1337)=1140
var superPow = function (a, b) {
	const mod = 1337,
		phi = 1140;

	a %= mod;
	if (!a) return 0;

	let num = "";

	while (b.length) {
		num = num + b.shift();
		if (num.length > 8) {
			num = +num % phi;
			num ? (num += "") : (num = "");
		}
	}
	num = +num % phi;

	let pow = 1,
		res = a;

	while (pow < num) {
		pow++;
		res *= a;
		res %= mod;
	}

	return res;
};
console.log(superPow(78267, [3, 8, 3, 0, 0, 0, 0, 0, 0]));
