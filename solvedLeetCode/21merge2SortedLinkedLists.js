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

const mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  const linker = (s, b) => {
    s.next = mergeTwoLists(s.next, b);
    return s;
  };
  return l1.val < l2.val ? linker(l1, l2) : linker(l2, l1);
};

result = mergeTwoLists(list1, list2);
console.log(result);
