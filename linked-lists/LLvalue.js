const linkedListValues = (head) => {
    // todo
    let res = [] // array to return for final result 
    let curr = head // set our curr variable to the head of the linked list
  
    while(curr !== null) { // while next is not null
      res.push(curr.val) // we push the current value and then we set the curr variable to the next node
      curr = curr.next
    }
    return res
  };
  