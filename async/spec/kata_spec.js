var kata = require("../kata")

describe("async_generate_awesome", function () {

  it("should async generate string", function (done) {
    kata.async_generate_awesome(function(str){
      expect(str).toBe("awesome");
      done();
    });
  });

});