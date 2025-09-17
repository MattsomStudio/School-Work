class Solution:
    def divisorGame(self, n: int) -> bool:
        assert 1 <= n <= 1000, # Constraints
        return n % 2 == 0 # Returns True if even, False if odd
        

"Tests the function with an example"
n = 2
result = Solution().divisorGame(n)  # Create instance of Solution class
print(result) 