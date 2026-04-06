class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        check_map = {}
        for item in nums:
            if item not in check_map:
                check_map[item] = 1
            else:
                return True
        return False