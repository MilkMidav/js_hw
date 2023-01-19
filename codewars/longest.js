/** Take 2 strings s1 and s2 including only letters from a to z. 
 * Return a new sorted string, the longest possible, containing distinct
 *  letters - each taken only once - coming from s1 or s2. */

function longest(s1, s2) {
  const arr1 = s1.toLowerCase().split("")
  const arr2 = s2.toLowerCase().split("")

  const childrenArr = arr1.concat(arr2)

  const result = []

  for (let i = 0; i < childrenArr.length; i++) {
    if (!result.includes(childrenArr[i])) {
      result.push(childrenArr[i])
    }
  }
  return result.sort().join('')
}

const a = "xyaabBbcKcccdefww"
const b = "xxxxyyyyablmopq"

console.log(longest(a, b))