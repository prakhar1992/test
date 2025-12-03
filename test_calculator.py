import unittest
from calculator import calculate

class TestCalculator(unittest.TestCase):

    def test_calculate_valid_input(self):
        self.assertEqual(calculate(20, 2), 20.0)

    def test_calculate_division_by_zero(self):
        self.assertEqual(calculate(20, 0), "Error: Division by zero")

    def test_calculate_general_error(self):
        self.assertEqual(calculate("a", 2), "Error: unsupported operand type(s) for /: 'str' and 'int'")

if __name__ == '__main__':
    unittest.main()
