var kata = require("../kata")

describe("generate_awesome", function () {

  it("1 is not yeap year", function () {
    expect( kata.is_leap_year(1) ).toBe(false);
  });

  it("4 is yeap year", function () {
    expect( kata.is_leap_year(4) ).toBe(true);
  });

  it("100 is not yeap year", function () {
    expect( kata.is_leap_year(100) ).toBe(false);
  });

  it("400 is yeap year", function () {
    expect( kata.is_leap_year(400) ).toBe(true);
  });

  // ---

  it("1900 is not yeap year", function () {
    expect( kata.is_leap_year(1900) ).toBe(false);
  });

  it("2000 is yeap year", function () {
    expect( kata.is_leap_year(2000) ).toBe(true);
  });

});