class Solution:
    def addDigits(self, num: int) -> int:
        """Calculate the digital root of a number using the mathematical formula."""
        MAXint = 2**31 - 1

        if not (0 <= num <= MAXint): # constraints
            raise ValueError("Num must be between 0 and {MAXint}")
        
        # Handle edge case
        if num == 0:
            return 0
        
        # Apply digital root formula
        return 1 + (num - 1) % 9 # Used mod 9 to shortcut the process and limit use of unnecessary loops

# Test Cases
num = 38
solution = Solution()
print(solution.addDigits(num)) # 2
num = 0
print(solution.addDigits(num)) # 0 
num = 123456
print(solution.addDigits(num)) # 3
# Used Generative AI to assit in writing the test cases.