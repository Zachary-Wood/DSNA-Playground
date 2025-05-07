const intersection = (a, b) => {
    // todo
  
    const hash = {}
    let result = []
  
    for (let item of a) {
      if (!(item in hash)) hash[item] = 0
      hash[item] += 1
    }
  
    for (let item of b) {
      if (item in hash) hash[item] += 1
    }
  
    for (let res in hash) {
      if (hash[res] == 2) result.push(Number(res))
    }
  
    return result
  };



  const intersectionSet = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for (let item of b) {
      if (setA.has(item)) {
        result.push(item);
      }
    }
    return result;
  };