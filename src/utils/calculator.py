#!/usr/bin/env python3

"""A basic arithmetic calculator module."

def add(a, b):
    """
    Returns the sum of two numbers.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The sum of a and b.
    """
    return a + b

def subtract(a, b):
    """
    Returns the difference of two numbers.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The difference of a and b.
    """
    return a - b

def multiply(a, b):
    """
    Returns the product of two numbers.

    Args:
        a (int or float): The first number.
        b (int or float): The second number.

    Returns:
        int or float: The product of a and b.
    """
    return a * b

def divide(a, b):
    """
    Returns the quotient of two numbers.

    Args:
        a (int or float): The numerator.
        b (int or float): The denominator.

    Returns:
        float: The quotient of a and b.

    Raises:
        ZeroDivisionError: If the denominator b is zero.
    """
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero.")
    return a / b
