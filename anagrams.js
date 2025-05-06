// we need to make an object that has a count and stores how many of each letter 
// we need to iterate through each string and make it so the count object has each letter in it
// we iterate through the next string and if the letter is already in the count object we remove it
// we then itereate through the count oject and if anything has a 1 we return false 



    

const anagrams = (s1, s2) => {


    const data = {}
 
    for (let item of s1) {
      if (!(item in data)) data[item] = 0;
      data[item] += 1
    }
 
   for (let item of s2) {
     if (data[item] == undefined) return false
     else data[item] -= 1
   }
 
   for (let item in data) {
     if (data[item] != 0) return false
   }
 
   return true
 };
    
    
