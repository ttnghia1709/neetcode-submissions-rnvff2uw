class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        possible_result = []
        for i in range (len(nums)-2):
            if nums[i] > 0:
                continue
            if nums[i] != 0 and nums[i] == nums[i-1]:
                continue
            rest_target = 0 - nums[i]
            visited_map = {}
            for j in range (i + 1, len(nums)):
                if nums[j] in visited_map and [nums[i], visited_map[nums[j]], nums[j]] not in possible_result:
                    possible_result.append([nums[i], visited_map[nums[j]], nums[j]])
                else:
                    visited_map[rest_target-nums[j]] = nums[j]
        return possible_result
