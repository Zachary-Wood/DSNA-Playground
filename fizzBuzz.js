const fizzBuzz = (n) => {
    // todo
    // we need to iterate though are n all all the way to the number
    // we then need to check first if its divisible by both 
    // we then check if its by 3 
    // lastly we check if it is by 5
    // if the number is not divisible we will add the number to an array
  
    let numsArr = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) numsArr.push('fizzbuzz')
      else if (i % 3 === 0) numsArr.push("fizz")
      else if (i % 5 === 0) numsArr.push('buzz')
      else numsArr.push(i)
    }
  
    return numsArr
    
  };