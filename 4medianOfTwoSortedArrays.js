/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//brute force. not good. will try later with binary search O(log(min(m,n)))
const findMedianSortedArrays = function (nums1, nums2) {
  const arr = [nums1, nums2].flat().sort((a, b) => a - b);
  console.log(arr);
  if (arr.length % 2) return arr[(arr.length - 1) / 2];
  else return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
};
console.log(findMedianSortedArrays([3], [-2, -1]));

/*
Algorithm: 

Create a recursive function that takes two arrays and the sizes of both the arrays.
Take care of the base cases for the size of arrays less than 2. (previously discussed in Approach).Note: The first array is always the smaller array.
Find the middle elements of both the arrays. i.e element at (n – 1)/2 and (m – 1)/2 of first and second array respectively. Compare both the elements.
If the middle element of the smaller array is less than the middle element of the larger array then the first half of smaller array is bound to lie strictly in the first half of the merged array. It can also be stated that there is an element in the first half of the larger array and second half of the smaller array which is the median. So, reduce the search space to the first half of the larger array and second half of the smaller array.
Similarly, If the middle element of the smaller array is greater than the middle element of the larger array then reduce the search space to the first half of the smaller array and second half of the larger array.
*/
