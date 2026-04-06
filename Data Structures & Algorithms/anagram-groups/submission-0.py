class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strs1 = []
        result_map = {}
        for item in strs:
            sorted_item = "".join(sorted(item))
            if sorted_item in result_map:
                result_map[sorted_item].append(item)
            else:
                result_map[sorted_item] = [item]
        return list(result_map.values())
        