const linkedListValues = (head) => {
    // todo
    let res = []
    let curr = head
  
    while(curr !== null) {
      res.push(curr.val)
      curr = curr.next
    }
    return res
  };
  