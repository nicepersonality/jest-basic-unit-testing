const parseDna = require('../modules/parsedna');

test('Returns canonical string unchanged', () => {
  expect(parseDna('GATTACA')).toBe('GATTACA');
});
test('Eliminates non-canonical letters in string', () => {
  expect(parseDna('BAT A CAT')).toBe('ATACAT');
});
test('Lowercase letters are non-canonical', () => {
  expect(parseDna('GaTtAcA')).toBe('GTAA');
});
test('If the string is empty, return an empty string', () => {
  expect(parseDna('')).toBe('');
});
