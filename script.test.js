import {
    generateRandomColor,
    filterNegativeNumbers
} from './script.js';

describe('generateRandomColor', () => {
    it('should have "r", "g" and "b" as properties with numbers as values', () => {
        expect(generateRandomColor()).toMatchObject(expect.objectContaining({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        }));
    });
});

describe('filterNegativeNumbers', () => {
    it('should return a new array without negative numbers', () => {
        const arr = [-4,-8,-9,-7];
        expect(filterNegativeNumbers(arr)).toEqual([]);
        expect(filterNegativeNumbers([0])).toEqual([0]);
    });
});