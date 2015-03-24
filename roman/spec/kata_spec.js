var kata = require("../kata")

describe("roman", function () {

  it("should convert 1 to I", function () {
    expect( kata.convert(1) ).toBe("I");
  });

  it("should convert 2 to II", function () {
    expect( kata.convert(2) ).toBe("II");
  });

});