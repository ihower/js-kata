var kata = require("../kata")

describe("generate_awesome", function () {

  it("should generate awesome string", function () {
    var foo = {
      bar: function() { console.log("real") },
    };

    spyOn(foo, 'bar').and.returnValue(456);

    foo.bar(123);

    expect( foo.bar ).toHaveBeenCalled();
    expect( foo.bar(123) ).toBe(456); //toHaveBeenCalledWith(123);

    expect( foo.baz ).toBe("123");
  });

});