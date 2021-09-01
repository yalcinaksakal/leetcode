// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

var reverse = function (x) {
  if (!x) return x;
  sign = x < 0 ? -1 : 1;
  x *= sign;
  result = (x + "").split("").reverse().join("");
  i = 0;
  while (result[i] === "0") {
    i++;
  }
  result = result.slice(i);
  result = (+result | 0) == result ? result : 0;
  return result * sign;
};

//better
const reverse2 = x => {
  result = (x + "")
    .split("")
    .reverse()
    .reduce((a, b) => (a === "0" ? b : a + b));
  result =
    result[result.length - 1] === "-" ? "-" + result.slice(0, -1) : result;
  // (+a | 0) == a;
  return (+result | 0) == result ? result : 0;
};
console.log(reverse2(-1023000));
