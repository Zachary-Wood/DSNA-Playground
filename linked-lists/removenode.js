const removeNode = (head, targetVal) => {
    // todo
  
    if (head.val === targetVal) return head.next // this checks if the head node is the target value, if it is we return the next node
  
    let prev = null // we set up a prev variable to keep track of the prev node
    let curr = head // we set the curr variable to be the head of the linked list 
  
    while(curr !== null) {
      if (curr.val === targetVal) { // if the current node is equal to the target value we reomove it and set the previous node to point to the next node and then we break out of the loop
        prev.next = curr.next // logic to point the prev at the next node of the current node 
        break;
      } 
      
      prev = curr // we set the prev node to be equal to what the current node is before we increment the current node
      curr = curr.next // set the current node to be the next node in the linked list 
    }
  
    return head // return the modified head of the linked list
    
  };