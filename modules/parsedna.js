const parseDna = function(string) {
  let canonString = '';
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] === 'C') ||
      (string[i] === 'T') ||
      (string[i] === 'A') ||
      (string[i] === 'G')
    ) {
      canonString += string[i];
    }
  }
  return canonString;
}

module.exports = parseDna;
