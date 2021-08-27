// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

const findLongestPalindromicSubstring = s => {
  let longestPalSubstring = s[0];
  const length = s.length;
  const palArr = new Array(length).fill(0).map(() => new Array(length).fill(0));
  //all chars are pal of length 1
  //   for (i = 0; i < length; i++) palArr[i][i] = 1;
  //
  for (subStringLength = 2; subStringLength <= length; subStringLength++) {
    i = -1;
    while (i < length - subStringLength) {
      i++;
      //   first and last chars of substring must be equal and substirng between them must be a pal. if not continue.
      if (
        s[i] !== s[i + subStringLength - 1] ||
        (subStringLength > 3 && !palArr[i + 1][i + subStringLength - 1 - 1])
      )
        continue;
      //this substring is pal.
      palArr[i][i + subStringLength - 1] = 1;
      if (subStringLength > longestPalSubstring.length)
        longestPalSubstring = s.slice(i, i + subStringLength);
    }
  }
  return longestPalSubstring;
};

result = findLongestPalindromicSubstring("babadababsasaaaasasbabadab");
console.log(result);
result = findLongestPalindromicSubstring("babad");
console.log(result);
