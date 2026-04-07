/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head == null) return head;
    let reverseLstHead = new ListNode(head.val, null);
    head = head.next;
    while (head) {
        const newNode = new ListNode(head.val, reverseLstHead);
        reverseLstHead = newNode;
        head = head.next;
    }
    return reverseLstHead;
    }
}
