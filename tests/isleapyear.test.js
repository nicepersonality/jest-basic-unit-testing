const isLeapYear = require('../modules/isleapyear');

test('years that are divisible by 400 are leap years', () => {
  expect(isLeapYear(1600)).toBe(true);
});
test('years that are divisible by 100 are not leap years', () => {
  expect(isLeapYear(1900)).toBe(false);
});
test('years that are divisible by 4 are leap years', () => {
  expect(isLeapYear(2020)).toBe(true);
});
test('years that are not divisible by 4 are not leap years', () => {
  expect(isLeapYear(2019)).toBe(false);
});
