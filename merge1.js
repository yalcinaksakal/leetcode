/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const push = val => {
    let low = 0,
      high = m - 1,
      mid;

    while (low < high) {
      mid = (low + high) >>> 1;
      if (nums1[mid] < val) low = mid + 1;
      else high = mid;
    }
    if (low === m - 1 && nums1[low] < val) low++;
    nums1.pop();
    nums1.splice(low, 0, val);
    m++;
  };
  while (nums2.length) push(nums2.shift());
};
