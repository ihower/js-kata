var Order = function(user, options){
  options = options || {};

  this.user = user;
  this.status = "New";
  this.total = options["total"] || 0;
  this.gateway = options["gateway"];
}

Order.prototype.amount = function(){

  if ( this.user && this.user.is_vip ) {
    if ( this.total >= 10000 ) {
      return this.total * 0.9;
    } else if ( this.total >= 1000 ) {
      return this.total * 0.95;
    } else {
      return this.total;
    }
  } else {
    if (this.total >= 10000 ) {
      return this.total * 0.97;
    } else {
      return this.total;
    }
  }
}

Order.prototype.receiver_name = function(){
  return this.user.full_name();
}

Order.prototype.ship = function(){
  this.gateway.deliver(this.user);
}

exports.Order = Order;