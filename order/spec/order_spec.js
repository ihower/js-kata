var Order = require("../order").Order;

describe("order", function () {

  var order = new Order();

  describe("when initialized", function() {

    it("should have default status is New", function () {
      expect(order.status).toBe("New");
    });

    it("should have default amount is 0", function () {
      expect(order.amount).toBe(0);
    });

  });
});