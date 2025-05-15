const sumNumbersRecursive = (numbers) => {
    
    // we check if the numbers array is empty 
    if (numbers.length == 0) return 0
    
    // we add the firt number of of the array and add slice the array to remove the first number
    // we call the function again with the sliced array
    // we keep doing this until the array is empty
    // we then return the sum of all the numbers
    return  numbers[0] + sumNumbersRecursive(numbers.slice(1))
  };