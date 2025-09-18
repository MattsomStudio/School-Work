class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        assert 1 <= len(nums) <= 10**4 # constraints

        for i in range(len(nums)): # constraints
            assert -2**31 <= nums[i] <= 2**31 - 1

        nums = nums.sort(key = lambda x: x == 0)  # used Ai to teach me how to use lambda properly and sort
        return nums