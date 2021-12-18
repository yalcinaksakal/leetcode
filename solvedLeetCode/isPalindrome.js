/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/\W/g, "").replace("_", "").toLowerCase();
  let i = 0,
    j = s.length - 1;
  while (j > i) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama_"));
