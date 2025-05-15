


    const isPrime = (n) => {

        if (n < 2) return false
      
        for (let i = 2; i < n; i ++) {
          // we check to see if the n is divisible by i
          // if there is no remainder then it is not prime
          // if there is a remiander we continue
          if (n % i === 0) return false
        }
      
        return true
}