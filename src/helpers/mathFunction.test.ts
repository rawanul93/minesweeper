/* eslint-disable no-unused-vars */
import { add, multiply } from './mathFunctions';

// 1st param describes our test cases. 2nd parameter takes a function
describe('Match functions tests', () => {
	it('Checks add function', () => {
		expect(add(1, 2)).toBe(3);
	});
	it('Checks multiply function', () => {
		expect(multiply(2, 2)).toBe(4);
	});
});
