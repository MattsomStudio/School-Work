class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Two-pointer approach: one for placing non-zero elements, one for scanning
        Time: O(n), Space: O(1)
        """
        # Pointer for the position where next non-zero element should go
        left = 0
        
        # Scan through array with right pointer
        for right in range(len(nums)):
            # If current element is non-zero, place it at left position
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1