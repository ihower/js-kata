exports.convert = function(n){

  var str = "";
  var table = [
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]

  table.forEach(function(t) {
    while ( n >= t[0] ) {
      str += t[1];
      n -= t[0];
    }
  })

  return str;
}