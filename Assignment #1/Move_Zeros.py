class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        nums = nums.sort(key = lambda x: x == 0)  # Used Ai to teach me how to use lambda properly and sort
        return nums


# test code
nums = [0,1,0,3,12]
Solution().moveZeroes(nums)  # Create instance of Solution class
print(nums) 