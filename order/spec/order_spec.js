var User = require("../user").User;
var Order = require("../order").Order;

describe("order", function () {

  describe("when initialized", function() {

    var order = new Order();

    it("should have default status is New", function () {
      expect(order.status).toBe("New");
    })

    it("should have default amount is 0", function () {
      expect(order.amount()).toBe(0);
    })

  })

  describe("#amount", function() {
    var user, order;

    describe("when user is vip",function(){

      beforeEach(function(){
        user = new User( { is_vip: true } )
      })

      it("should discount five percent if total >= 1000", function () {
        order = new Order( user, { total: 2000 } )
        expect(order.amount()).toBe(1900)
      })

      it("should discount ten percent if total >= 10000", function () {
        var user = new User( { is_vip: true } )
        var order = new Order( user, { total: 10000 } )
        expect(order.amount()).toBe(9000)
      })
    })

   describe("when user is not vip", function() {
      it("should discount three percent if total >= 10000", function () {
        var user = new User( { is_vip: false } )
        var order = new Order( user, { total: 10000 } )
        expect(order.amount()).toBe(9700)
      })
    })
  })

})