/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	const seq = {};
	let subSeq;
	for (let i = 0; i < s.length - 9; i++) {
		subSeq = s.slice(i, i + 10);
		seq[subSeq] ? seq[subSeq]++ : (seq[subSeq] = 1);
	}
	return Object.keys(seq).filter(k => seq[k] > 1);
};
/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
