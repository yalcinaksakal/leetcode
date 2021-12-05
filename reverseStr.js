var reverseStr = function (s, k) {
  let reversed = 0;
  let rChars = [];
  const result = [];

  for (const char of s) {
    console.log(char);
    if (reversed < k) rChars.unshift(char);
    else if (reversed === k) {
      result.push(...rChars);
      rChars = [];
      result.push(char);
      console.log(result);
    } else if (reversed < 2 * k) result.push(char);
    else {
      reversed = 0;
      rChars.unshift(char);
    }
    reversed++;
  }
  result.push(...rChars);
  return result.join("");
};

console.log(reverseStr("abcdefg", 2));
