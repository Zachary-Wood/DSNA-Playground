const longestStreak = (head) => {
    // todo
    let currStreak = 0;
    let maxStreak= 0;
    let curr = head;
    let prev = null
  
    while (curr != null) {
      if(curr.val === prev) {
        currStreak += 1;
        
      } else {
        currStreak = 1
      }
      if (currStreak > maxStreak) maxStreak = currStreak
      prev = curr.val
      curr = curr.next
    }
  
    return maxStreak
    
  };