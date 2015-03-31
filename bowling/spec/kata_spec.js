var Bowling = require("../kata").Bowling;

describe("Bowling game", function () {
  var game;

  beforeEach(function(){
    game = new Bowling();
  })

  it("roll 1 and score 1", function () {
    game.roll(1);

    expect( game.score() ).toBe(1);
  });

  it("roll 1,2,3 and score 6", function () {
    game.roll_many(1,2,3);

    expect( game.score() ).toBe(6);
  });

});