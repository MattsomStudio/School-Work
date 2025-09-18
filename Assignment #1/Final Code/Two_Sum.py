class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Constraints (these should be assertions or validation checks)

        if not (2 <= len(nums) <= 10**4):
            raise ValueError("length of nums must be between 2 and 10^4")

        if not all(-10**9 <= x <= 10**9 for x in nums):
            raise ValueError("numbers must be between -10^9 and 10^9")

        if not (-10**9 <= target <= 10**9):
            raise ValueError("target must be between -10^9 and 10^9")

        hashmap = {num: i for i, num in enumerate(nums)} # hashmap to store numbers and their indices

        for i, num in enumerate(nums):
            complement = target - num  # find the complement of the current number
            if (complement in hashmap) and (hashmap[complement] != i):  # ensure we are not using the same element twice
                return [i, hashmap[complement]]  # return the indices of the two numbers
        return  # returns if no solution is found


# test cases
solution = Solution()
print(solution.twoSum([2, 7, 11, 15], 9))  # [0,1]
print(solution.twoSum([3, 2, 4], 6))  # [1,2]
print(solution.twoSum([3, 3], 6))  # [0,1]
