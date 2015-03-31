var User = function(options){
  options = options || {};

  this.is_vip = options["is_vip"];
  this.first_name = options["first_name"];
  this.last_name = options["last_name"];
}

User.prototype.full_name = function(){
  return this.first_name + " " + this.last_name;
}

exports.User = User;

