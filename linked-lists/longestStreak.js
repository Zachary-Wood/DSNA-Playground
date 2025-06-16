const longestStreak = (head) => {
    // todo
    let currStreak = 0; //we create a variable to keep track of the current 
    let maxStreak= 0; // we create a variable to keep track of the maximum streak
    let curr = head; // we set the current node to be the head of the linked list
    let prev = null // this prev value is what we use to compare the current node with the previous node
  
    while (curr != null) {
      if(curr.val === prev) { // iterate though the linked list and check if the current node and the prev node are equal to each other
        currStreak += 1; // if they are we increment the current streak by 1
        
      } else {
        currStreak = 1 // if they are not equal we reset the current streak to 1
      }
      if (currStreak > maxStreak) maxStreak = currStreak // if the current streak is greater than the maximum streak we set the maximum streak to be the current streak
      prev = curr.val // we increment the prev node to be the current nodes value 
      curr = curr.next // you increment the current node to be the next node in the linked list
    }
  
    return maxStreak // we then raturn the biggest streak of consecutive nodes that have the same value
    
  };