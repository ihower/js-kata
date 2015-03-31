var request = require('request');

var TrainClient = function(host){
  this.host = host;
  this.request = request;
}

TrainClient.prototype.query = function(train_id, callback) {

  this.request.get("https://ihower.tw/test.json" , function (error, response, body)  {
    callback( JSON.parse(body) )
  })

}

TrainClient.prototype.reserve = function(train_id, seat_id, callback) {

  this.request.post("https://ihower.tw/test.json" , function (error, response, body)  {
    callback( JSON.parse(body) )
  })

}


exports.TrainClient = TrainClient;