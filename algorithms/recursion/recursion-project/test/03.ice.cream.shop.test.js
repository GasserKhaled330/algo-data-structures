const iceCreamShop = require('../problems/03-ice-cream-shop');

describe('iceCreamShop()', () => {
	test('should return true if the favorite ice cream is included in the flavors', () => {
		expect(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')).toBe(false);

		expect(
			iceCreamShop(
				['pistachio', 'green tea', 'chocolate', 'mint chip'],
				'green tea'
			)
		).toBe(true);
		expect(
			iceCreamShop(
				[
					'cookies n cream',
					'blue moon',
					'superman',
					'honey lavender',
					'sea salt caramel',
				],
				'pistachio'
			)
		).toBe(false);
		expect(iceCreamShop(['moose tracks'], 'moose tracks')).toBe(true);
		expect(iceCreamShop([], 'honey lavender')).toBe(false);
	});
});
