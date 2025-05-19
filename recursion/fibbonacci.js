const fibonacci = (n) => {
    // todo
    if (n === 0 || n === 1) return n
  
    return fibonacci(n-1) + fibonacci(n -2)
    // formula for fibonacci
  };