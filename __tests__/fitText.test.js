const formatTextInLines = require('../fit-text/fitText');
const str =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.';
describe('formatTextInLines', () => {
  test('should return string', () => {
    expect(typeof formatTextInLines()).toBe('string');
  });
  test(`should return string INVALID INPUT if text argument is missing
     or has length less than 15 characters`, () => {
    expect(formatTextInLines()).toBe('Invalid input');
    expect(formatTextInLines('Lorem')).toBe('Invalid input');
    expect(formatTextInLines('Northcoders Bootcamp', 14)).toBe('Invalid input');
  });
  test('should divide the given text into lines using newline characters, not exceeding the characters per row limit', () => {
    expect(formatTextInLines('Northcoders Coding Bootcamp', 15)).toBe(
      'Northcoders\nCoding Bootcamp'
    );
    expect(formatTextInLines('Northcoders Coding Bootcamp', 20)).toBe(
      'Northcoders Coding\nBootcamp'
    );
    expect(formatTextInLines(str, 30)).toBe(
      'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nAliquam nec consectetur risus.\nCras vel urna a tellus dapibus\nconsequat. Duis bibendum\ntincidunt viverra. Phasellus\ndictum efficitur sem quis\nporttitor. Mauris luctus\nauctor diam id ultrices.\nPraesent laoreet in enim ut\nplacerat. Praesent a facilisis\nturpis.'
    );
    expect(formatTextInLines(str, 50)).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Aliquam nec consectetur risus. Cras vel urna\na tellus dapibus consequat. Duis bibendum\ntincidunt viverra. Phasellus dictum efficitur sem\nquis porttitor. Mauris luctus auctor diam id\nultrices. Praesent laoreet in enim ut placerat.\nPraesent a facilisis turpis.'
    );
  });
});
