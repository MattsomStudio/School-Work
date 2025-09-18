class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        assert 1 <= len(strs) <= 200  # constraints
        assert all(0 <= len(s) <= 200 for s in strs)  # constraints

        max_len = max(len(word) for word in strs)  # gets the length of the longest word in the list
        min_len = min(len(word) for word in strs)  # gets the length of the smallest word in the list
        char = []  # initializes output as an empty list
        output = ""

        for i in range(max_len): # iterates through the range of the length of the longest word
            for word in strs:
                if i < len(word):
                    char.append(word[i])

        for i in range(0, len(char), len(strs)): # iterates through char in steps of size length of strs
            current_slice = char[i:i + len(strs)] # takes a slice of size len(strs)

            if len(current_slice) < len(strs):
                break  # breaks the loop if the slice is smaller than len(strs)

            elif len(current_slice) > len(strs):
                break  # breaks the loop if the slice is smaller than len(strs)

            elif i//len(strs) >= min_len:
                return output  # returns output if the index exceeds the length of the smallest word in the list

            elif all(c == current_slice[0] for c in current_slice) == False: # checks if all characters in the slice are the same
                return output  # returns output if the characters in the slice are not all the same
            
            elif all(c == current_slice[0] for c in current_slice): # checks if all characters in the slice are the same
                output += current_slice[0]  # appends the common character to output

        return output