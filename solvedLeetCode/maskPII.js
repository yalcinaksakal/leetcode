/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
	const email = () => {
		s = s.toLowerCase();
		s = s.split("@");
		s[0] = s[0][0] + "*".repeat(5) + s[0][s[0].length - 1];
		return s.join("@");
	};

	const phone = () => {
		s = s.replace(/[^0-9]/g, "");
		let res = "";
		if (s.length > 10) res = "+" + "*".repeat(s.length - 10) + "-";
		return res + "***-***-" + s.slice(-4);
	};

	return s.includes("@") ? email() : phone();
};
