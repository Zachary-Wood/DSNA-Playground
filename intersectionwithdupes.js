const intersectionWithDupes = (a, b) => {
    // todo
    const countA = {};
    for (let item of a) {
      countA[item] = (countA[item] || 0) + 1;
    }
  
    
    const countB = {};
    for (let item of b) {
      countB[item] = (countB[item] || 0) + 1;
    }
  
    let res = [];
  
      for (let ele in countA) {
        if (ele in countB) {
          for (let i = 0; i < Math.min(countA[ele], countB[ele]); i++) {
            res.push(ele)
          }
        }
      }
    
    
  
    return res
  };