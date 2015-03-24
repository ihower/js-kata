exports.convert = function(n){

  var str = "";

  while ( n >= 10 ) {
    str += "X";
    n -= 10
  }

  while ( n >= 9 ) {
    str += "IX";
    n -= 9
  }

  while ( n >= 5 ) {
    str += "V";
    n -= 5
  }

  while ( n >= 4 ) {
    str += "IV";
    n -= 4
  }

  return str + Array(n+1).join("I");

}