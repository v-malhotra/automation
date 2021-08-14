const { multiply } = require('./functions');
const functions = require ('./functions');

test('Add number 20 and 10 equal 30', () => {
    expect(functions.add(20, 10)).toBe(30);
})

test('Multiply number 20 and 10 equal 200', () => {
    expect(functions.multiply(20, 10)).toBe(200);
})

test('Subtract number 20 and 10 equal 10', () => {
    expect(functions.substract(20, 10)).toBe(10);
})

test('Divide number 20 and 10 equal 2', () => {
    expect(functions.divide(20, 10)).toBe(2);
})

test('Divide number 20 by zero to get expected result Infinity', () => {
    expect(functions.divide(20, 0)).toBe(Infinity);
})

test('Negative number expected after substraction of 20 and 30', () => {
    expect(functions.substract(20, 30)).toBeLessThan(0);
    expect(functions.substract(20, 30)).toBe(-10);
})

test('Adding 2 numbers in string form 1 and 2 to get concatenated result 12', () => {
    expect(functions.add('1', '2')).toBe('12');
})
