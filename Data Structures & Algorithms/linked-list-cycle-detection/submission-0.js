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
     * @return {boolean}
     */
    hasCycle(head) {
        const nodeTravesal = [];
        if (!head) return false;
        while (true) {
            if (!head.next) return false;
            if (nodeTravesal.includes(head)) {
                return true;
            }
            nodeTravesal.push(head);
            head = head.next;
        }
    }
}
