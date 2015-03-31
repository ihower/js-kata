var request = require('request');

var TrainClient = function(host){
  this.host = host;
  this.request = request;
}

TrainClient.prototype.query = function(train_id, callback) {

  this.request.get(this.host + "/train/" + train_id , function (error, response, body)  {
    callback( JSON.parse(body) )
  })

}


exports.TrainClient = TrainClient;