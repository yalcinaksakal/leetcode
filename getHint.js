/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	const s = {};
	for (const c of secret) s[c] ? s[c]++ : (s[c] = 1);
	let a = 0,
		b = 0;
	for (let i = 0; i < secret.length; i++) {
		if (secret[i] == guess[i]) a++;
		if (s[guess[i]]) {
			s[guess[i]]--;
			b++;
		}
	}
	b = b - a;
	return a + "A" + b + "B";
};
