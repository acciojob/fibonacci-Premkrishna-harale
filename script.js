function fibonacci(num) {
// your code here
  if (num <= 0) return "Invalid input"; // Handling invalid input
    
    let fibArray = [0, 1];
    
    for (let i = 2; i <= num; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    
    return fibArray[num - 1];
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3



module.exports = fibonacci;
