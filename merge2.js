/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const push = val => {
    nums1[m] = val;
    let i = m;
    while (val < nums1[i - 1] && i) {
      [nums1[i - 1], nums1[i]] = [nums1[i], nums1[i - 1]];
      i--;
    }
    m++;
  };
  while (nums2.length) push(nums2.shift());

  console.log(nums1);
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
