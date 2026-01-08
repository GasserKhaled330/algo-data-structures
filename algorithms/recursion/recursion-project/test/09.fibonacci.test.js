const fibonacci = require('../problems/09-fibonacci');

describe('fibonacci()', () => {
	test('should return the expected nth Fibonacci number', () => {
		expect(fibonacci(1)).toBe(1);
		expect(fibonacci(2)).toBe(1);
		expect(fibonacci(3)).toBe(2);
		expect(fibonacci(4)).toBe(3);
		expect(fibonacci(10)).toBe(55);
		expect(fibonacci(5)).toBe(5);
		expect(fibonacci(20)).toBe(6765);
	});
});
