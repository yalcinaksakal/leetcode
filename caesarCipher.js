function caesarCipher(s, k) {
	// Write your code here
	let encrypted = "",
		code;
	const coder = v => {
		code += k;
		code > v && (code -= 26);
	};

	for (let i = 0; i < s.length; i++) {
		code = s.charCodeAt(i);
		if (code > 96 && code < 123) coder(122);
		else if (code > 64 && code < 91) coder(90);
		encrypted += String.fromCharCode(code);
	}
	return encrypted;
}
caesarCipher("abcABQ.-*sduAWwewxyz", 28);
