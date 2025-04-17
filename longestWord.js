const longestWord = (sentence) => {
    
    let longest = "";
    // create a variable to compare the word too
    let newSentence = sentence.split(" ") // we split the sentence into an array of words
    
    // we loop through the array of words
    for (let i =0; i < newSentence.length; i++) {
        // we get the word at the index
      let word = newSentence[i]
        // we check if the word is longer than the longest word or equal since we want the last one as well
      if (word.length > longest.length || word.length == longest.length) {
        longest = word
      }
    }
  
    return longest
    
    
  };