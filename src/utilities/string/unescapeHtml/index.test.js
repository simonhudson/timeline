'use strict';

import { expect } from 'chai';
const unescapeHtml = require('./index');

describe('unescapeHtml(): Unescapes HTML special characters', () => {
	
	it(`should return null when input is invalid or empty string`, () => {
		[null, true, 10, ''].forEach(input => {
			const actual = unescapeHtml(input);
			expect(actual).to.equal(null);
		});
	});
	
	it(`should unescape single-quoted HTML`, () => {
		const input = `&lt;div class=&#39;my-element&#39;&gt;Hello&lt;/div&gt;`;
		const expected = `<div class='my-element'>Hello</div>`;
		const actual = unescapeHtml(input);
		expect(actual).to.equal(expected);
	});
	
	it(`should unescape double-quoted HTML`, () => {
		const input = '&lt;div class=&quot;my-element&quot;&gt;Hello&lt;/div&gt;';
		const expected = '<div class="my-element">Hello</div>';
		const actual = unescapeHtml(input);
		expect(actual).to.equal(expected);
	});
	
	it(`should unescape querystring`, () => {
		const input = 'www.foo.com/?a=1&amp;b=2';
		const expected = 'www.foo.com/?a=1&b=2';
		const actual = unescapeHtml(input);
		expect(actual).to.equal(expected);
	});
	
});
