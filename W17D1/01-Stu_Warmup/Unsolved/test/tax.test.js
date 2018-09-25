var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here

describe("calculateTax", function() {
    it("should be a price", function() {
        expect(calculateTax(1.09)).to.be.a("number");
    });

    it("returns the right price with tax included", function() {
        expect(calculateTax(1.00)).to.equal(1.13);
    });

    it("is not a price", function() {
        expect(function(){calculateTax("Hello")}).to.throw(Error);
    });
});

console.log(calculateTax(1.00));