var kata = require("../kata")

describe("roman", function () {

  it("should convert 1 to I", function () {
    expect( kata.convert(1) ).toBe("I");
  });

  it("should convert 2 to II", function () {
    expect( kata.convert(2) ).toBe("II");
  });

  it("should convert 4 to IV", function () {
    expect( kata.convert(4) ).toBe("IV");
  });


  it("should convert 5 to V", function () {
    expect( kata.convert(5) ).toBe("V");
  });

  it("should convert 9 to IX", function () {
    expect( kata.convert(9) ).toBe("IX");
  });

  it("should convert 10 to X", function () {
    expect( kata.convert(10) ).toBe("X");
  });

  it("should convert 20 to XX", function () {
    expect( kata.convert(20) ).toBe("XX");
  });

  it("should convert 21 to XX", function () {
    expect( kata.convert(21) ).toBe("XXI");
  });

});