const pairSum = (numbers, targetSum) => {
    // todo
    let hash = {} // we create a hash
  
    for (let i = 0; i < numbers.length; i++) { // we iterate through our numbers
      let num = numbers[i]; // we set our num to be the number at the index
      let comp = targetSum - num; // we set our comp to be the target sum minus the number at the index
      if (comp in hash) return [i, hash[comp]] // if the comp is in the hash we return the index and the hash[comp]
  
      hash[num] = i // if the number was not in the hash we set the num to be its index such as 3:0 and 4:1
    
      
    }
  };
  