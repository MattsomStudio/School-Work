class Solution:
    def divisorGame(self, n: int) -> bool:
        assert 1 <= n <= 1000, # constraints
        return n % 2 == 0 # returns True if n is even, False if n is odd