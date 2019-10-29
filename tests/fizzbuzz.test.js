const fizzbuzz = require('../modules/fizzbuzz');

test('If the number is divisible by 3, return "Fizz"', () => {
  expect(fizzbuzz(9)).toBe('Fizz');
});
test('If the number is divisible by 5, return "Buzz"', () => {
  expect(fizzbuzz(10)).toBe('Buzz');
});
test('If the number is divisible by 3 and 5, return "FizzBuzz"', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});
test('Otherwise, just return the number that was passed into the function', () => {
  expect(fizzbuzz(4)).toBe(4);
});
