/**
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let pre = new ListNode(0)
  let cur = pre
  let carry = 0
  while(l1 || l2) {
    let x = l1 === null ? 0 : l1.val
    let y = l2 === null ? 0 : l2.val
    let sum = x + y + carry

    // 这里要取整，js有浮点
    carry =  Math.floor(sum / 10)
    sum = sum % 10

    cur.next = new ListNode(sum)
    // 指向下一个节点
    cur = cur.next
    if (l1) {
      l1 = l1.next
    }
    if(l2) {
      l2 = l2.next
    }
  }
  if (carry === 1) {
    cur.next = new ListNode(carry)
  }
  return pre.next
};