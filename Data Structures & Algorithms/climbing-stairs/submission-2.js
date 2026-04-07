class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 3) return n;
        let previousFirst = 3;
        let previousSecond = 2;
        for (let i = 4; i < n; i++) {
            let temp = previousFirst;
            previousFirst = previousFirst + previousSecond;
            previousSecond = temp;
        }
        return previousFirst + previousSecond;
    }
}
