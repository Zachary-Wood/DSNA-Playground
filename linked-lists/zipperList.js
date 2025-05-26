const zipperLists = (head1, head2) => {
    // todo
    const head = head1 // we create a new head for the merged list, which will be the first node of the first list
    let tail = head // this will be the tail of the merged list so we will have a next pointer to append to it easily
  
    let curr1 = head1.next // we always want to start with the first node of the first list, so we set curr1 to the next node of the first list
    let curr2 = head2 // we set curr2 to the head of the second list
    let count = 0 // we will use this count to alternate between the two lists
  
  
    while(curr1 != null && curr2 != null) { // we loop through the lists and if its even we take from the second list, if its odd we take from the first list
      if (count % 2 === 0) {
        tail.next = curr2 // we set the next pointer of the tail to the current node of the second list
        curr2 = curr2.next // we then move the pointer of the second list to the next node
        count++ // we cincrement the count to alternate between the two lists
      } else {
        tail.next = curr1
        curr1 = curr1.next
        count++
      }
  
      tail = tail.next // we then move the tail pointer to the next node in the merged list
      
    }
  
    if (curr1 != null) tail.next = curr1 // if there is any nodes left we append them to the tail of the merged list
    if (curr2 != null) tail.next = curr2
    
  
  
    return head
  
    
  
    
  };