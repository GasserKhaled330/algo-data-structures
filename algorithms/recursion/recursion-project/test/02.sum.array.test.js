const sumArray = require('../problems/02-sum-array');

describe('sumArray()', () => {
	test('should return the sum of all the elements in the array', () => {
		expect(sumArray([1, 2, 3])).toBe(6);
		expect(sumArray([0, 1, -3])).toBe(-2);
		expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
		expect(sumArray([5, 4, 3, 2, 1])).toBe(15);
		expect(sumArray([0, 0, 1, 0, 0])).toBe(1);
		expect(sumArray([-1, -1, -1, -1])).toBe(-4);
		expect(sumArray([99, 100, 101])).toBe(300);
		expect(sumArray([])).toBe(0);
		expect(sumArray([42])).toBe(42);
	});
});
