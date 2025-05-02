// we need to make an object that has a count and stores how many of each letter 
// we need to iterate through each string and make it so the count object has each letter in it
// we iterate through the next string and if the letter is already in the count object we remove it
// we then itereate through the count oject and if anything has a 1 we return false 


const anagrams = (s1, s2) => {


    let count = {} // object to create our hash
  
    for (let char of s1) { // we iterate through are first string
      if (!(char in count)) { // if the char is not in the count we int it to 0
        count[char] = 0
      }
      count[char] += 1 // we then once its checked all of the chars we increment it 
    }
  
    for (let char of s2) { // we then itereate through the second string
      if (count[char] == undefined) return false // if there is not number we return false
      else count[char] -= 1 // of there is a number we decrement it 
      
    }
    // console.log(count)
    for (let char in count) { // we then iterate through the count obj
      if (count[char] != 0) return false // if its not equal to zero that means its a stray letter so we return false
      
    }
    return true // if everything passes through with hitting no flags to return false we return true
    
    
  };