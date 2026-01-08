const reverse = require('../problems/05-reverse');

describe('reverse()', () => {
	test('should return the string reversed', () => {
		expect(reverse('house')).toBe('esuoh');
		expect(reverse('dog')).toBe('god');
		expect(reverse('atom')).toBe('mota');
		expect(reverse('q')).toBe('q');
		expect(reverse('id')).toBe('di');
		expect(reverse('')).toBe('');
	});
});
