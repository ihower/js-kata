var TrainClient = require("../kata").TrainClient

describe("TrainClient", function () {

  var client = new TrainClient("http://localhost");

  it("should return host", function () {
    expect(client.host).toBe("http://localhost");
  });

  it("should query train data", function (done) {
    var data = [ { seat_id: 1 }, { seat_id: 2 } ]

    spyOn(client.request, 'get').and.callFake(function(url, callback) {
      callback(null, 200, JSON.stringify(data));
    });

    client.query("123", function(res) {
      expect(res).toEqual(data);
      done();
    });
  });

});