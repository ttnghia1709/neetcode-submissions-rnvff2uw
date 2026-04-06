class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        ele_with_frequent = {}
        for item in nums:
            if item in ele_with_frequent:
                ele_with_frequent[item] += 1
            else:
                ele_with_frequent[item] = 1
        frequents = list(ele_with_frequent.values())
        frequents.sort(reverse=True)
        print(frequents)
        k_most_frequent = frequents[0:k]
        print(k_most_frequent)
        result = []
        for item in ele_with_frequent.keys():
            if ele_with_frequent[item] >= k_most_frequent[-1]:
                result.append(item)
        return result

        