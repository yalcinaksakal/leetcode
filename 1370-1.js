/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	let res = "";
	const charFreq = Array(26).fill(0),
		pusher = dir => {
			for (let i = dir === 1 ? 0 : 26; dir === 1 ? i < 27 : i > -1; i += dir)
				if (charFreq[i]) {
					res += String.fromCharCode(i + 97);
					charFreq[i]--;
				}
		};
	for (let i = 0; i < s.length; i++) charFreq[s.charCodeAt(i) - 97]++;
	while (res.length !== s.length) pusher(1), pusher(-1);
	return res;
};

sortString("aaaabbbbcccc");
