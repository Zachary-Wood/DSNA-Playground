const isPrime = (n) => {
    // 1 and itself 
    // we check to see if n < 2 if it is we return false
    if (n < 2) return false;
    
    // we iterate staring from 2 and 
    for (let i = 2; i <= Math.sqrt(n); i++) {
     // we check to see if n is divisible by i
      if (n % i === 0 ) return false
    
    }
    return true
  };