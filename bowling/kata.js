var Bowling = function(){
  this._score = 0
}

Bowling.prototype.roll = function(n) {
  this._score += n;
}

Bowling.prototype.roll_many = function() {
  for(var i = 0; i < arguments.length; i++) {
    this.roll( arguments[i] ) ;
  }
}

Bowling.prototype.score = function(){
  return this._score;
}


exports.Bowling = Bowling;