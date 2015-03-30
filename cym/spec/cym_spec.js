var corrector = require("../cym")

describe("corrector", function () {

  it("should should return correct year and month", function () {
    expect(corrector.year_month(2011, 3)).toEqual( [2011, 3] );
    expect(corrector.year_month(2011, 14)).toEqual( [2012,2] );
    expect(corrector.year_month(2011, 24)).toEqual( [2012,12] );
  })

});