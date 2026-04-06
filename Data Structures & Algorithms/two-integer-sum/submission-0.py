class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        visited = {}
        for i in range(len(nums)):
            x = nums[i]
            y = target - nums[i]
            if y in visited:
                return [visited[y], i]
            visited[x] = i

        