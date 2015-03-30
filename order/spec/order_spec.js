var Order = require("../order").Order;

describe("order", function () {

  var order = new Order();

  describe("when initialized", function() {

    it("should have default status is New", function () {
      expect(order.status).toBe("New");
    })

    it("should have default amount is 0", function () {
      expect(order.amount).toBe(0);
    })

  })

  describe("#amount", function() {
    describe("when user is vip",function(){
      it("should discount five percent if total > 1000", function () {
        //...
      })

      it("should discount ten percent if total > 10000", function () {
        //...
      })
    })

   describe("when user is not vip", function() {
      it("should discount three percent if total > 10000", function () {
        //...
      })
    })
  })

})