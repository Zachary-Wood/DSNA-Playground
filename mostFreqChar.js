/*
  We need to first make a hash object with each letter
    1. we need to make a bigNum variable and set it to -Infinity
    2. we need to make our hash and increment each time a letter is see 
    3. we then need to iterate through our hash and compare it to our bigNum 
    4. if its bigger we set bigNum to be equal to that number
    5. we then return the bigNum at the end
    

    TC: O(n)
    SC: O(n)

*/


const mostFrequentChar = (s) => {
    let hash = {} // set our hash obj
    let bigLet = -Infinity // create a numbee to compare too
    let biggest = '' // make a string to return the biggest number 
  
    for (let char of s) { // we iterate to make our hashmap
      if (!(char in hash)) hash[char] = 0; // if its not in it we int it 
      if (char in hash) hash[char] += 1; // if its in the hash we increment it 
    }
  
    for (let char in hash) { // we then iterate through our hash and if the hash[char] is greater that our biggest number so far
      if (hash[char] > bigLet) { // we set our biggest string variable equal to the letter that occurs the most
        bigLet = hash[char]
        biggest = char
      }
  
      
      
     
    }