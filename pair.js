const pairSum = (numbers, targetSum) => {
    // todo
    let hash = {}
  
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let comp = targetSum - num;
      if (comp in hash) return [i, hash[comp]]
  
      hash[num] = i
    
      
    }
  };
  