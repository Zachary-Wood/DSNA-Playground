const mergeLists = (head1, head2) => {
    // todo
    const dummyHead = new Node(null) // Create a dummy head to simplify the merge process
    let tail = dummyHead // this will be the tail of the merged list so we can append to it easily
    let curr1 = head1 // we create 2 pointers to merge the two lists
    let curr2 = head2
  
    while (curr1 !== null && curr2 != null) { // we loop while both lists have nodes
      if (curr1.val < curr2.val) {  // we then compare the values of the nodes to see which one is smaller 
        tail.next = curr1           // whichever is smaller we append to the tail of the merged list
        curr1 = curr1.next          // and we move the pointer to the next node in that list
      } else {
        tail.next = curr2
        curr2 = curr2.next
      }
  
      tail = tail.next // we move the tail pointer to the next node in the merged list
    }
  
    if (curr1 !== null) tail.next = curr1 // after the loop if one of the lists still has nodes left, we append those nodes to the tail of the merged list
    if (curr2 !== null) tail.next = curr2
  
  
  
  
    return dummyHead.next // we return the next node of the dummy head, which is the head of the merged list
    
    
  };