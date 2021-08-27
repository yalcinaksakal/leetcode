const myAtoi = s => {
  console.log(s.split("").reverse().join(""));
  s = s.trim();
  result = "";
  isPositive = true;
  if (s[0] === "-") isPositive = false;
  if (["-", "+"].includes(s[0])) s = s.slice(1);
  for (i = 0; i < s.length; i++) {
    if (s[i] != +s[i] || s[i] === " ") break;
    if (!result && s[i] === "0") continue;
    result += s[i];
  }
  if (!result) return 0;
  if ((+result | 0) != result) return isPositive ? 2147483647 : -2147483648;
  return isPositive ? +result : -1 * result;
};

console.log(myAtoi(" 00001999900qqq"));


// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.
// Note:

// Only the space character ' ' is considered a whitespace character.
// Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.