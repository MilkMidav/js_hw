function duplicateEncode(word){
  const toLower = word.toLowerCase()

  let result = []

  for (let i = 0; i < toLower.length; i++) {
    for (let j = i + 1; j < toLower.length; j++) {
      if (toLower[i] === toLower[j]) {
        result.push('+')
      } else {
        result.push('-')
      }
    }
  }
  const string = result.join("")
  return string;
}

console.log(duplicateEncode('wodrdwsw'))