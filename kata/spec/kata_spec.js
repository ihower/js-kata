var kata = require("../kata")

describe("generate_awesome", function () {

  it("should generate awesome string", function () {
    var result = kata.generate_awesome();
    expect(result).toBe("awesome");
  });

});