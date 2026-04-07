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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) return null;
    if (!list1) return list2;
    if (!list2) return list1;
    let head = null;
    let mergeList = null;
    if (list1.val <= list2.val) {
        head = new ListNode(list1.val, null);
        list1 = list1.next;
    } else {
        head = new ListNode(list2.val, null);;
        list2 = list2.next;
    }
    mergeList = head;
    while (list1 || list2) {
        if (!list1) {
            mergeList.next = new ListNode(list2.val, null);
            list2 = list2.next;
            mergeList = mergeList.next;
            continue;
        }
        if (!list2) {
            mergeList.next = new ListNode(list1.val, null);
            list1 = list1.next;
            mergeList = mergeList.next;
            continue;
        }
        if (list1 && list2 && list1.val <= list2.val) {
            mergeList.next = new ListNode(list1.val, null);
            list1 = list1.next;
        } else if (list1 && list2 && list1.val > list2.val) {
            mergeList.next = new ListNode(list2.val, null);
            list2 = list2.next;
        }
        mergeList = mergeList.next;
    }
    return head;
    }
}
