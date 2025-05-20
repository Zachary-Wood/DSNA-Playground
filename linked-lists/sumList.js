const sumList = (head) => {
    // todo
    let sum = 0
    let curr = head
  
    while (curr !== null) {
      sum += curr.val
      curr = curr.next
    }
    return sum
  };