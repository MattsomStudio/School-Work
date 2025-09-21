class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        # Input validation
        if not (1 <= len(strs) <= 200):
            raise ValueError("length of strs must be between 1 and 200")
        if not all(0 <= len(s) <= 200 for s in strs):
            raise ValueError("length of each string must be between 0 and 200")
        
        word_hashmaps = {}  # dictionary to store hashmaps for each word
        Max_Word_len = 0
        output = ""
        
        # Find the maximum length of the words
        for word in strs:
            Max_Word_len = max(Max_Word_len, len(word))
        
        # Create a hashmap for each word
        for i, word in enumerate(strs):
            char_count = {}  # hashmap for current word
            for num, char in enumerate(word):  # Use enumerate for cleaner indexing
                char_count[num] = char  # store character at each index (index -> char)
            word_hashmaps[i] = char_count  # Use i instead of i+1 for 0-based indexing
        
        # Check for common prefix
        for i in range(Max_Word_len):
            if i in word_hashmaps[0]:  # Check if position i exists in first word
                current_char = word_hashmaps[0][i]  # Get character at position i from first word
                
                # Check if all words have the same character at position i
                if all(i in word_hashmaps[word_idx] and word_hashmaps[word_idx][i] == current_char 
                    for word_idx in range(len(strs))):
                    output += current_char
                else:
                    break  # Stop when we find a mismatch
            else:
                break  # Stop if we've reached the end of the first word
                
        return output

# Test cases
solution = Solution()
print(solution.longestCommonPrefix(["flower", "flow", "flight"]))  # "fl"
print(solution.longestCommonPrefix(["dog", "racecar", "car"]))     # ""
print(solution.longestCommonPrefix(["interstellar", "internet", "internal"]))  # "inter"