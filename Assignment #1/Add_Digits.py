class Solution:
    def addDigits(self, num: int) -> int:
        assert 0 <= num <= 2**31 - 1, "num must be between 0 and 2^31 - 1"

        List = []

        for i in str(num):
            List.append(i)

        while len(List) > 1:
            num = sum(int(i) for i in List)
            List.clear()
            for i in str(num):
                List.append(i)

        return num

# test code
num = 38
result = Solution().addDigits(num)  # Create instance of Solution class
print(result)
