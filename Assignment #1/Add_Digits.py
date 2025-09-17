class Solution:
    def addDigits(self, num: int) -> int:
        assert 0 <= num <= 2**31 - 1, # constraints

        List = []

        for i in str(num): # turns the number into a list of its digits
            List.append(i)

        while len(List) > 1: # loops until the list is a single digit
            num = sum(int(i) for i in List)
            List.clear()
            for i in str(num): # turns the number into a list of its digits
                List.append(i)

        return num