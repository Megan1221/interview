/* eslint-disable no-console */
function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
function replaceString2(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) === oldS)
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length)
  }
  return fullS
}
console.log(replaceString('World', 'Web', 'Brave New World'))
console.log(replaceString2('World', 'Web', 'Brave New World'))
