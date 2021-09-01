const findLongestPalindromicSubstring = s => {
  let longestPalSubstring = s[0];
  const length = s.length;
  const palMap = {};


  for (subStringLength = 2; subStringLength <= length; subStringLength++) {
    i = -1;
    while (i < length - subStringLength) {
      i++;
      //   first and last chars of substring must be equal and substirng between them must be a pal. if not continue.
      if (
        s[i] !== s[i + subStringLength - 1] ||
        (subStringLength > 3 && !palMap[`${i + 1},${i + subStringLength - 2}`])
      )
        continue;
      //this substring is pal.

      palMap[`${i},${i + subStringLength - 1}`] = 1;
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


