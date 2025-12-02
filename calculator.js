// Assuming this is the existing calculator's JavaScript file

// This is a placeholder for the calculator's core logic.  Replace with the actual implementation.

function calculate(operation, num1, num2) {
  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      result = num1 / num2;
      break;
    default:
      return "Error: Invalid operation";
  }

  // Apply the increment
  result = result + 1;

  return result;
}

// Example usage (replace with your calculator's display logic)
function displayResult(result) {
  const resultElement = document.getElementById('result');
  if (resultElement) {
    resultElement.textContent = result;
  } else {
    console.log("Result element not found");
  }
}

// Example event listener (replace with your calculator's event handling)
// document.getElementById('calculateButton').addEventListener('click', () => {
//   const num1 = parseFloat(document.getElementById('num1').value);
//   const num2 = parseFloat(document.getElementById('num2').value);
//   const operation = document.getElementById('operation').value;
//   const result = calculate(operation, num1, num2);
//   displayResult(result);
// });

