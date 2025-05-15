const sumNumbersRecursive = (numbers) => {
    // todo
    let sum = 0
    if (numbers.length == 0) return 0
  
    return sum += numbers[0] + sumNumbersRecursive(numbers.slice(1))
  };