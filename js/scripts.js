//business log
//constructer holds player propeties
function Player(playerName, turnScore, totalScore) {
  this.playerName = playerName;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
}
//adds rollValue to give turn score
Player.prototype.roll = function() {
  var diceValues = [1, 2, 3, 4, 5, 6];
  var rollValue = diceValues[Math.floor(Math.random() * diceValues.length)];
  if (rollValue === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore = this.turnScore + rollValue;
  };
  return rollValue;
}
//calculates total score based on turn score
Player.prototype.score = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
}
// userinterface
$(".btn-new").click(function(event){
  $("#new-players").show();
});
$(".btn").click(function(event){
  event.preventDefault();

  var player1 =$("#new-player-one").val();
  var player2=$("#new-player-two").val();
  $("#playerone").text(player1);
  $("#playertwo").text(player2);
});
