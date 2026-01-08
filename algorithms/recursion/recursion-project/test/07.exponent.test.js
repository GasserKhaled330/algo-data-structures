const exponent = require('../problems/07-exponent');

describe('exponent()', () => {
	test('should return the base number to the n power', () => {
		expect(exponent(3, 2)).toBe(9);
		expect(exponent(2, -2)).toBe(0.25);
		expect(exponent(5, 5)).toBe(3125);
		expect(exponent(3, 3)).toBe(27);
		expect(exponent(-2, 2)).toBe(4);
		expect(exponent(0, 10)).toBe(0);
		expect(exponent(10, 10)).toBe(10000000000);
	});
});
