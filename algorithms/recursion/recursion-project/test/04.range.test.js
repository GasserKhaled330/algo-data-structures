const range = require('../problems/04-range');

describe('range()', () => {
	test('should an array of numbers from the start to the end number, not inclusive', () => {
		expect(range(1, 5)).toEqual([1, 2, 3, 4]);

		expect(range(3, 4)).toEqual([3]);
		expect(range(7, 6)).toEqual([]);
	});
});
