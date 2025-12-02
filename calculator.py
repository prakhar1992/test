# calculator.py

def calculate(a, b):
    try:
        # Example calculation (replace with your actual calculation)
        result = a / b  # Example: division
    except ZeroDivisionError:
        return "Error: Division by zero"
    except Exception as e:
        return f"Error: {e}"
    
    return result + 10

if __name__ == "__main__":
    # Example usage
    a = 20
    b = 2
    output = calculate(a, b)
    print(output)
