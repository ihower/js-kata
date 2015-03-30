var Order = function(user, options){
  options = options || {};

  this.user = user;
  this.status = "New";
  this.total = options["total"] || 0;
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

exports.Order = Order;