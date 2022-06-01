const countValidTriangles = require("../valid-triangles/validTriangles");

describe('countValidTriangles', () => {
    test('should return a number', () => {
        expect(typeof countValidTriangles()).toBe('number')
    });
    test('should return 0 if argument is empty array', () => {
        expect(countValidTriangles()).toBe(0)
        expect(countValidTriangles([])).toBe(0);
    });
    test(`if only one triangle is in the argument, should return 1 if the sum of any two
    sides is bigger than the third and return 0 if not`, () => {
        expect(countValidTriangles([[5,10,25]])).toBe(0);
        expect(countValidTriangles([[5,4,5]])).toBe(1);
    });
    test(`should return the count of valid triangles`, () => {
        expect(countValidTriangles([
            [5, 10, 25],
            [5, 4, 5],
            [542, 586, 419]
          ])).toBe(2)
          expect(countValidTriangles([
            [5, 10, 25],
            [5, 4, 5]
          ])).toBe(1)
    });
    test('should not mutate the original input', () => {
        const triangles=[[5, 10, 25],
                        [5, 4, 5],
                        [542, 586, 419]];
        countValidTriangles(triangles);
        expect(triangles).toStrictEqual([[5, 10, 25],
            [5, 4, 5],
            [542, 586, 419]])
    });
});