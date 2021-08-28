// 21. Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

//   Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

const mergeLists = function (listArr) {
  const remainingList = listArr.filter(l => l !== null);
  if (remainingList.length === 1) return remainingList[0];
  const linker = (min, others) => {
    min.next = mergeLists([min.next, ...others]);
    return min;
  };
  min = Math.min(...remainingList.map(list => list.val));
  minList = remainingList.findIndex(list => list.val === min);
  others = remainingList.filter((_, i) => i !== minList);

  return linker(remainingList[minList], others);
};

result = mergeLists([list1, list2, list3]);
console.log(result);
