const linkedListFind = (head, target) => {
    // todo
    let curr = head;
  
    while (curr !== null) {
      if (curr.val === target) return true 
      curr = curr.next
    }
    return false
  };