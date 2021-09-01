// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeKLists = function (listArr) {
  const remainingList = listArr.filter(
    l => l !== null && l.val !== null && l.val !== undefined
  );
  if (!remainingList.length) return null;
  if (remainingList.length === 1) return remainingList[0];
  const linker = (small, others) => {
    small.next = small.next
      ? mergeKLists([small.next, ...others])
      : mergeKLists(others);
    return small;
  };
  min = Math.min(...remainingList.map(list => list.val));
  minListIndex = remainingList.findIndex(list => list.val === min);
  others = remainingList.filter((_, i) => i !== minListIndex);
  return linker(remainingList[minListIndex], others);
};

list0 = new ListNode();
list0.val = undefined;
// console.log(list0);
list00 = new ListNode();
list00.val = null;
// console.log(list00);

list1 = new ListNode(1);
current = list1;
[1, 2, 3, 4, 5, 6].forEach(val => {
  current.next = new ListNode(val);
  current = current.next;
});
list2 = new ListNode(-7);
current = list2;
[-5, -2, 3, 7, 8, 9].forEach(val => {
  current.next = new ListNode(val);
  current = current.next;
});
list3 = new ListNode(-8);
current = list3;
[-5, -4, -2, 6, 11, 12].forEach(val => {
  current.next = new ListNode(val);
  current = current.next;
});
list4 = new ListNode(-10);
current = list4;
[-9, -2, -1, 12, 15, 17].forEach(val => {
  current.next = new ListNode(val);
  current = current.next;
});
// result = mergeKLists([list0, list00, list1, list2, list3]);
// console.log(result);
// arr = [];
// while (result) {
//   arr.push(result.val);
//   result = result.next;
// }
// console.log(arr);

const longListmerger = longList => {
  const shortList = [];
  for (i = 0; i < longList.length; i += 3000) {
    partialList = longList.slice(i, i + 3000);
    shortList.push(mergeKLists(partialList));
  }
  console.log(shortList);
  console.log(longList.length);
};

const longList = [];
for (i = -5000; i < 5000; i++) {
  longList.push(new ListNode(i));
}
// result = mergeKLists(longList);
// console.log(result);
// arr = [];
// while (result) {
//   arr.push(result.val);
//   result = result.next;
// }
// console.log(arr);

longListmerger(longList);
// result = mergeKLists(longList);
