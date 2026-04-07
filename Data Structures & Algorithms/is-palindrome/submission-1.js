class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const lowerS = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return lowerS == lowerS.split("").reverse().join("")
    }
}
