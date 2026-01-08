const addToTwelve = require('../problems/06-add-to-twelve');

describe('addToTwelve()', () => {
	test('should return true if there are two adjacent numbers in the array that sum to 12', () => {
		expect(addToTwelve([1, 3, 4, 7, 5])).toBe(true);
		expect(addToTwelve([1, 3, 4, 7, 6])).toBe(false);
		expect(addToTwelve([1, 11, 4, 7, 6])).toBe(true);
		expect(addToTwelve([1, 12, 4, 7, 6])).toBe(false);
		expect(addToTwelve([1])).toBe(false);
	});
});
