const getNodeValue = (head, index) => {
    // todo
    let count = 0
    let curr = head
  
    while (curr !== null) {
      if (count != index) count += 1
      else return curr.val
      curr = curr.next 
    }
    return null
  };