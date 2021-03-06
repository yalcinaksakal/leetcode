/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;
  m--;
  n--;
  while (n >= 0) {
    if (nums2[n] > nums1[m] || m < 0) {
      nums1[i] = nums2[n];
      n--;
    } else {
      nums1[i] = nums1[m];
      m--;
    }
    i--;
  }
  console.log(nums1);
};
console.log(merge([4, 6, 7, 0, 0, 0], 3, [1, 2, 3], 3));
