const advancedExponent = require('../problems/08-advanced-exponent');

describe('advancedExponent()', () => {
	test('should return the base number to the n power', () => {
		expect(advancedExponent(2, 0)).toBe(1);
		expect(advancedExponent(2, 1)).toBe(2);
		expect(advancedExponent(2, 2)).toBe(4);
		expect(advancedExponent(2, 3)).toBe(8);
		expect(advancedExponent(2, 4)).toBe(16);
		expect(advancedExponent(2, 5)).toBe(32);
		expect(advancedExponent(2, 6)).toBe(64);
		expect(advancedExponent(2, 7)).toBe(128);
		expect(advancedExponent(2, 8)).toBe(256);
		expect(advancedExponent(2, 9)).toBe(512);
		expect(advancedExponent(2, 10)).toBe(1024);
		expect(advancedExponent(2, 11)).toBe(2048);
		expect(advancedExponent(2, 12)).toBe(4096);
	});

	test('should not throw a maximum call stack error for high powers', () => {
		expect(() => {
			advancedExponent(2, 100000);
		}).not.toThrow();
	});
});
