class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Constraints (these should be assertions or validation checks)
        assert 2 <= len(nums) <= 10**4, "length of nums must be between 2 and 10^4"
        assert all(-10**9 <= x <= 10**9 for x in nums), "numbers must be between -10^9 and 10^9"
        assert -10**9 <= target <= 10**9, "target must be between -10^9 and 10^9"

        for i, num1 in enumerate(nums):
            # used Ai to teach me how to use the enumerate function
            for j, num2 in enumerate(nums[i+1:], start=i + 1):
                if num1 + num2 == target: # checks if the sum of the two numbers equals the target
                    return [i, j]
        
        return "No Solutions"  # returns a string if no solution is found
    
# test cases
solution = Solution()
print(solution.twoSum([2,7,11,15], 9)) # [0,1]
print(solution.twoSum([3,2,4], 6)) # [1,2]