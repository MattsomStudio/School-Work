class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        assert 1 <= len(strs) <= 200  # constraints
        assert all(0 <= len(s) <= 200 for s in strs)  # constraints
        
        word_hashmaps = {}  # dictionary to store hashmaps for each word
        max_len = len(strs)
        Max_Word_len = 0
        output = ""

        for i in range(max_len): # iterates through the range of the length of the longest word
            for word in strs:
                if i < len(word):
                    Max_Word_len = max(Max_Word_len, len(word))  # find the maximum length of the words

        # Create a hashmap for each word
        for i, word in enumerate(strs):
            char_count = {}  # hashmap for current word
            num = -1  # index counter
            for char in word:
                num += 1
                char_count[char] = num # store indices of each character

            word_hashmaps[i+1] = char_count
        
        for word, hashmap in word_hashmaps.items():
            for i in range(Max_Word_len):
                if all(list(hashmap.keys(i))[i]) == (list(hashmap.values())[i]):
                    output += f"{list(hashmap.keys())[i]}"
                else:
                    return output  # return empty string if no common prefix found
        return output  # return empty string if no common prefix found


# Test cases
solution = Solution()
print(solution.longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"