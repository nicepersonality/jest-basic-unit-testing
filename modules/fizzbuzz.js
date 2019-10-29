const fizzbuzz = function(num) {
  let string = '';
  if (num % 3 === 0) {
    string += 'Fizz';
  }
  if (num % 5 === 0) {
    string += 'Buzz';
  }
  if (string.length > 0) {
    return string;
  }
  return num;
}

module.exports = fizzbuzz;
