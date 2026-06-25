class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return self.binary_search(nums, 0, len(nums) - 1, target)

    def binary_search(self, nums: List[int], low: int, high: int, target: int) -> int:
        mid = low + int((high - low) / 2)
        if low == high and target != nums[mid]:
            return -1
        if low > high:
            return -1
        if target == nums[mid]:
            return mid
        if target < nums[mid]:
            return self.binary_search(nums, low, mid - 1, target)
        if target > nums[mid]:
            return self.binary_search(nums, mid + 1, high, target)
        