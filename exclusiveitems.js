const exclusiveItems = (a, b) => {
    // todo
    let res = []
  
    let setA = new Set(a)
    let setB = new Set(b)
  
    for (let item of a) {
      if (!(setB.has(item))) res.push(item)
    }
  
    for (let item of b) {
      
      if (!(setA.has(item))) res.push(item)
    }
  
    return res
  };