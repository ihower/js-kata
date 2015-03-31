exports.async_generate_awesome = function(cb){

  setTimeout( function(){
    cb("awesome");
  }, 1000)

}