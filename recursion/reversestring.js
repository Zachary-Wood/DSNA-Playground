const reverseString = (s) => {
    // todo
    if (s.length === 0) return ""
    console.log(s[s.length - 1])
  
    return s[s.length - 1] + reverseString(s.slice(0,s.length - 1))
  };