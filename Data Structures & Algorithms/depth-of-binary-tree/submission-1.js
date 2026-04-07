/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        const depthLeft = this.maxDepth(root.left) + 1;
        const depthRight = this.maxDepth(root.right) + 1;
        return depthLeft > depthRight ? depthLeft : depthRight;
    }
}
