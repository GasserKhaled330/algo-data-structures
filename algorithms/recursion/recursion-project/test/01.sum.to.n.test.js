const sumToN = require('../problems/01-sum-to-n');

describe('sumToN()', () => {
	test('should sum all the numbers from 0 to n', () => {
		expect(sumToN(5)).toBe(15);
		expect(sumToN(1)).toBe(1);
		expect(sumToN(9)).toBe(45);
		expect(sumToN(-8)).toBeNull();
	});
});
