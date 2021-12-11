/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber1 = function (nums) {
  const numOfOcc = new Map();
  let val;
  for (const el of nums) {
    val = numOfOcc.has(el) ? numOfOcc.get(el) + 1 : 1;
    numOfOcc.set(el, val);
    if (numOfOcc.get(el) > 1) numOfOcc.delete(el);
  }
  return numOfOcc.keys().next().value;
};

var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2)
    if (nums[i] !== nums[i + 1]) return nums[i];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
