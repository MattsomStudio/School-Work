class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Constraints (these should be assertions or validation checks)
        assert 2 <= len(nums) <= 10**4, #Length of nums must be between 2 and 10^4
        assert all(-10**9 <= x <= 10**9 for x in nums), #Numbers must be between -10^9 and 10^9
        assert -10**9 <= target <= 10**9, #Target must be between -10^9 and 10^9

        for i, num1 in enumerate(nums):
            # Used Ai to teach me how to use the enumerate function
            for j, num2 in enumerate(nums[i+1:], start=i + 1):
                if num1 + num2 == target:
                    return [i, j]
        
        return "No Solutions"  # Returns a string if no solution is found


# Tests the function with an example
nums = [2, 7, 11, 15]
target = 9
result = Solution().twoSum(nums, target)  # Create instance of Solution class
print(result)
