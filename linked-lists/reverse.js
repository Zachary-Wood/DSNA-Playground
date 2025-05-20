const reverseList = (head) => {
    // todo
    let curr = head
    let prev = null
  
    while (curr != null){
      const current = curr.next // we create a variable to hold the value before we change it 
      curr.next = prev // we then set the curr.next to the previous pointing it the other way 
      prev = curr // we then set the vale to be the new current 
      curr = current // we set it to go to the next value
    }
  
    return prev
    
  };