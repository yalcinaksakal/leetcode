/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vwlIndexes = [];

  for (let i = 0; i < s.length; i++)
    if (vowels.includes(s[i])) vwlIndexes.push(i);

  const chars = s.split("");
  let i1, i2, temp;

  while (vwlIndexes.length > 1) {
    i1 = vwlIndexes.pop();
    i2 = vwlIndexes.shift();

    temp = chars[i1];
    chars[i1] = chars[i2];
    chars[i2] = temp;
  }

  return chars.join("");
};
