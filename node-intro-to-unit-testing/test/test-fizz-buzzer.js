const fizzBuzzer = require('../fizzBuzzer');

//unit tests for fizzBuzzer function

describe('fizzBuzzer', function() {

	//Normal case

	it('Should return "fizz-buzz" if num is divisible by 15', function() {
		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 45, expected: 'fizz-buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('Should return "buzz" if num is divisible by 5', function() {
		const normalCases = [
			{num: 5, expected: 'buzz'},
			{num: 10, expected: 'buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('Should return "fizz" if num is divisible by 3', function() {
		const normalCases = [
			{num: 3, expected: 'fizz'},
			{num: 6, expected: 'fizz'}
		];
		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('Should return the original number if it isn\'t divisible by 3 or 5', function() {
		const normalCases = [1, 2, 4];
		normalCases.forEach(function(input) {
			fizzBuzzer(input).should.equal(input);
		});
	});

	//Edge case

	it('Should throw an error message if num is NaN', function() {
		const edgeCases = ['Hello', true, 'world!'];
		edgeCases.forEach(function(input) {
			fizzBuzzer(input).should.throw('`num` must be a number');
		});
	});
});

