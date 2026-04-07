class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        for (let i = 0; i < lowerS.length / 2; i++) {
            if (lowerS[i] != lowerS[lowerS.length - i - 1]) {
                return false;
            }
        }
        return true;
    }
}
