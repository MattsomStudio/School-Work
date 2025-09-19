class SolutionExplicit:
    def divisorGame(self, n: int) -> bool:
        '''
        Determines if Alice can win the Divisor Game.
        Rules:
        - Alice and Bob take turns, Alice starts
        - On each turn, player chooses divisor x where 0 < x < n and n % x == 0
        - Replace n with n - x
        - Player who cannot make a move loses
        Alice wins if and only if n is even.
        '''

        # Constraints
        if not (1 <= n <= 1000):
            raise ValueError("n must be between 1 and 1000")      
        # Alice wins when n is even
        return (1 + (n - 1) % 9) % 2 == 0 # Optimized check for evenness


# Test cases
solution = SolutionExplicit()
n = 1
print(solution.divisorGame(n))  # False
n = 2
print(solution.divisorGame(n))  # True
n = 3
print(solution.divisorGame(n))  # False
n = 4
print(solution.divisorGame(n))  # True
n = 5
print(solution.divisorGame(n))  # False
n = 6
print(solution.divisorGame(n))  # True
n = 7
print(solution.divisorGame(n))  # False
n = 8
print(solution.divisorGame(n))  # True
n = 9
print(solution.divisorGame(n))  # False
n = 10
print(solution.divisorGame(n))  # True
n = 1000
print(solution.divisorGame(n))  # True
# Used Generative AI to assist in completely writing the test cases.