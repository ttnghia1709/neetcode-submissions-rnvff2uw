class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let parentheses = [];
        for (let i = 0; i < s.length; i++) {
            if (!parentheses.length && ["]", "}", ")"].includes(s[i])) return false;
            if ((s[i] == "]" && parentheses[parentheses.length - 1] == "[")
                || (s[i] == ")" && parentheses[parentheses.length - 1] == "(")
                || (s[i] == "}" && parentheses[parentheses.length - 1] == "{")) {
                parentheses.pop();
            } else {
                parentheses.push(s[i]);
            }
        }
        if (!parentheses.length) return true;
        return false;
    }
}
