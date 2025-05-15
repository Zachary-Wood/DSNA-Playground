const pairProduct = (numbers, targetProduct) => {
    // todo
  
    let hash = {}
  
    for (let i = 0; i < numbers.length; i++) {
      let num = numbers[i];
      let comp = Math.floor(targetProduct / num);
     
  
      if (comp in hash) return [hash[comp], i]
      hash[num] = i
     
    }
    
  };