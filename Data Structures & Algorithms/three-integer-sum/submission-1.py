class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        possible_result = []
        for i in range (len(nums)-2):
            rest_target = 0 - nums[i]
            visited_map = {}
            for j in range (i + 1, len(nums)):
                if nums[j] in visited_map:
                    possible_result.append([nums[i], visited_map[nums[j]], nums[j]])
                else:
                    visited_map[rest_target-nums[j]] = nums[j]
        result = []
        for item in possible_result:
            item.sort()
            if item not in result:
                result.append(item)
        return result
