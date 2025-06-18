const removeNode = (head, targetVal) => {
    // todo
  
    if (head.val === targetVal) return head.next
  
    let prev = null
    let curr = head
  
    while(curr !== null) {
      if (curr.val === targetVal) {
        prev.next = curr.next
        break;
      } 
      
      prev = curr
      curr = curr.next
    }
  
    return head
    
  };