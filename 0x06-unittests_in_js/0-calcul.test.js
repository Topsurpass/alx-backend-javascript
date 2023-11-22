const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber(a, b)", function () {
	it("No floating number", function () {
		assert.equal(calculateNumber(1, 3), 4);
	});
	it("should be rounded up", function () {
		assert.equal(calculateNumber(1, 3.7), 5);
	});
	it("should be rounded up", function () {
		assert.equal(calculateNumber(1.2, 3.7), 5);
	});
	it("should be rounded up", function () {
		assert.equal(calculateNumber(2.5, 3.9), 7);
	});
});
