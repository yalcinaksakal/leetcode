/**
 * @param {string} s
 * @return {string[]}
 * 1520
 */
var maxNumOfSubstrings = function (s) {
	const substrings = (() => {
			const charRanges = {},
				substrings = new Set(),
				addChars = (chars, newChars) => {
					newChars.forEach(c => !chars.includes(c) && chars.push(c));
				};
			//determine range of each char in s
			for (let i = 0; i < s.length; i++)
				charRanges[s[i]]
					? (charRanges[s[i]][1] = i)
					: (charRanges[s[i]] = [i, i]);
			//check each char's range if expanding the range is needed or not
			for (const range of Object.values(charRanges)) {
				const charsInRange = Array.from(
					new Set(s.slice(range[0], range[1] + 1))
				);
				for (let i = 0; i < charsInRange.length; i++) {
					//check if char's range starts prior to the range
					if (charRanges[charsInRange[i]][0] < range[0]) {
						addChars(charsInRange, [
							...new Set(s.slice(charRanges[charsInRange[i]][0], range[0])),
						]);
						range[0] = charRanges[charsInRange[i]][0];
					}
					//check if char's range ends after the range
					if (charRanges[charsInRange[i]][1] > range[1]) {
						addChars(charsInRange, [
							...new Set(
								s.slice(range[1] + 1, charRanges[charsInRange[i]][1] + 1)
							),
						]);
						range[1] = charRanges[charsInRange[i]][1];
					}
				}
				// add this range as a valid substring
				substrings.add(s.slice(range[0], range[1] + 1));
			}
			return Array.from(substrings);
		})().sort((a, b) => a.length - b.length),
		result = [],
		chosenSubsChars = new Set();
	let canAdd;

	for (const sub of substrings) {
		//if chars in sub havent used yet, we can add the sub to the result array
		const chars = new Set(sub.split(""));
		canAdd = true;
		chars.forEach(c => chosenSubsChars.has(c) && (canAdd = false));
		if (canAdd) {
			result.push(sub);
			chars.forEach(c => chosenSubsChars.add(c));
		}
	}
	return result;
};
console.log(maxNumOfSubstrings("cabcccbaa"));
