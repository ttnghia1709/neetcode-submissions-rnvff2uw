class Solution {
    public int maxSubArray(int[] nums) {
        int ans = nums[0];
        int fn = nums[0];
        for (int i = 1; i < nums.length; i++) {
            fn = Math.max(fn + nums[i], nums[i]);
            ans = Math.max(ans, fn);
        }
        return ans;
    }
}
