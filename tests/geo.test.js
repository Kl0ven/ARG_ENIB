const geo = require('../utils/geo');

test('testing geo 1', () => {
	expect(geo.isInRectangle(1, 1, 2, 2, 1.5, 1.5)).toBe(true);
});

test('testing geo 2', () => {
	expect(geo.isInRectangle(1, 1, 2, 2, 15, 1.5)).toBe(false);
});

test('testing geo 3', () => {
	expect(geo.isInRectangle(1, 1, -1, -1, 0, 0)).toBe(true);
});

test('testing geo 4', () => {
	expect(geo.isInRectangle(48.362780, -4.566410, 48.357661, -4.557516, 48.361233, -4.564961)).toBe(true);
});

test('testing geo 5', () => {
	expect(geo.isInRectangle(48.357661, -4.557516, 48.362780, -4.566410,  48.361233, -4.564961)).toBe(true);
});

test('testing geo 6', () => {
	expect(geo.isInRectangle(48.357661, -4.557516, 48.362780, -4.566410,  48.359322, -4.572750)).toBe(false);
});
