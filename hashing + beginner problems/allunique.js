const allUnique = (items) => {
    // todo  
    const hash = {}
  
    for (let item of items) {
        if (!hash[item]) hash[item] = 0;
        hash[item] += 1
    }
  
    console.log(hash)
    for (let items in hash) {
      
      if (hash[items] > 1) return false
    }
  
    return true
    
  };


  const allUniqueSet = (items) => {
    // todo  
    let set = new Set(items)
    return set.size === items.length
    
  };