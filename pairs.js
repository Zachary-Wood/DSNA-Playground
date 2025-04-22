const pairs = (elements) => {
    // todo
    // we need a nested for loop
    // we need a res array
    // when we iterate we need to see if its a pair or not already
    // we need to push an array of pairs that are whatever i is and j = i + 1
    // Time complexity O(n ^ 2)
    // Space complexity O(n ^ 2)
    let res = []
  
    for (let i = 0; i < elements.length; i++) {
      let ival = elements[i]
      for (let j = i + 1; j < elements.length; j++) {
        let jval = elements[j]
        const pair = [ival, jval]
        res.push(pair)
        
      }
    }
  
    return res
    
  };