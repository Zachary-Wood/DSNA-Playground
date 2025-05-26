const isUnivalueList = (head) => {
    // todo
  
    let curr1 = head
  
    while(curr1 !== null) {
      value = curr1.val
      if (curr1.val === head.val){
        curr1 = curr1.next
      } else {
        return false
      }
     
      
    }
  
    return true
  };