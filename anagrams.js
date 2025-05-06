// we need to make an object that has a count and stores how many of each letter 
// we need to iterate through each string and make it so the count object has each letter in it
// we iterate through the next string and if the letter is already in the count object we remove it
// we then itereate through the count oject and if anything has a 1 we return false 



    

const anagrams = (s1, s2) => {


    const data = {} // hash map to store the letters and their counts
 
    for (let item of s1) { // iterate through the first string and we add the letters to the hash map
      if (!(item in data)) data[item] = 0; // if its not there we add it 
      data[item] += 1 // then we increment the count 
    }
 
   for (let item of s2) { // we then iterate through the second string 
     if (data[item] == undefined) return false // if the letter is not in the hash map we return false
     else data[item] -= 1 // if it is we decrement the count
   }
 
   for (let item in data) { // we then iterate through the hash and see if any of the letter are not 0
     if (data[item] != 0) return false // if they are not we return false
   }
 
   return true // if all of them are 0 we return true
 };
    
    
