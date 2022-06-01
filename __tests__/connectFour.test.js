const findConnectFourWinner = require('../connect-four/connectFour');

describe('findConnectFourWinner', () => {
  test('should return string', () => {
    expect(typeof findConnectFourWinner()).toBe('string');
  });
  test('should return false if no argument is passed or its an empty array or a different size matrix', () => {
    expect(findConnectFourWinner()).toBe('Please provide a 7 * 6 matrix');
    expect(findConnectFourWinner([])).toBe('Please provide a 7 * 6 matrix');
    expect(findConnectFourWinner([[null,null],[null,null],[null,null],[null,null],[null,null],[null,null]]))
  });
  test('should return false if the is no winner', () => {
    const ma3x = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    expect(findConnectFourWinner(ma3x)).toBe('false');
  });
  test('should return X or O if there is a horizontal winner', () => {
    const ma3x = [
      [null, 'x', 'x', 'x', 'x', null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    expect(findConnectFourWinner(ma3x)).toBe('x');
  });
  test('should return X or O if there is a vertical winner', () => {
    const ma3x = [
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    expect(findConnectFourWinner(ma3x)).toBe('x');
  });
  test('should return X or O if there is a right to left diagonal winner', () => {
    const ma3x = [
      [null, 'x', null, null, null, null, null],
      [null, null, 'x', null, null, null, null],
      [null, null, null, 'x', null, null, null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    const secondDiagm3x = [
      [null, null, 'x', null, null, null, null],
      [null, null, null, 'x', null, null, null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, null, null, 'x', null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    const thirdDiagm3x = [
      [null, null, null, 'x', null, null, null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, null, null, 'x', null],
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    expect(findConnectFourWinner(ma3x)).toBe('x');
    expect(findConnectFourWinner(secondDiagm3x)).toBe('x');
    expect(findConnectFourWinner(thirdDiagm3x)).toBe('x');
  });
  test('should return X or O if there is a left to right diagonal winner', () => {
    const ma3x = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, 'x', null, null, null],
      [null, null, 'x', null, null, null, null],
      [null, 'x', null, null, null, null, null],
    ];
    const secondDiagm3x = [
      [null, null, null, 'x', null, null, null],
      [null, null, 'x', null, null, null, null],
      [null, 'x', null, null, null, null, null],
      ['x', null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    const thirdDiagm3x = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'x'],
      [null, null, null, null, null, 'x', null],
      [null, null, null, null, 'x', null, null],
      [null, null, null, 'x', null, null, null],
    ];
    expect(findConnectFourWinner(ma3x)).toBe('x');
    expect(findConnectFourWinner(secondDiagm3x)).toBe('x');
    expect(findConnectFourWinner(thirdDiagm3x)).toBe('x');
  });
  test('should not mutate original input', () => {
    const ma3x = [
      ['x', null, null, null, null, null, null],
      [null, 'o', null, null, null, null, null],
      [null, null, 'o', null, null, null, null],
      [null, null, 'x', 'x', 'x', 'x', null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ];
    findConnectFourWinner(ma3x);
    expect(ma3x).toEqual([
      ['x', null, null, null, null, null, null],
      [null, 'o', null, null, null, null, null],
      [null, null, 'o', null, null, null, null],
      [null, null, 'x', 'x', 'x', 'x', null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]);
    expect(findConnectFourWinner(ma3x)).toBe('x');
  });
});
