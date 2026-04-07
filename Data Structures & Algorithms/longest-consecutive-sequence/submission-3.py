class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        sorted_nums = sorted(nums)
        curr_length = 0
        max_length = 0
        for i, x in enumerate(sorted_nums):
            if i == 0 or sorted_nums[i] == sorted_nums[i - 1] + 1:
                curr_length += 1
            if curr_length > max_length:
                max_length = curr_length
            if sorted_nums[i] == sorted_nums[i - 1]:
                continue
            if sorted_nums[i] > sorted_nums[i - 1] + 1:
                curr_length = 1
        return max_length

        