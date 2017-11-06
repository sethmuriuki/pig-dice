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
    $("#new-players").hide(500);
});
$("#btn-roll").click(function(event){
  event.preventDefault();
  var player1RollNumber = player1.roll();
    if (player1RollNumber === 1) {
      $(".player1-scored1").show(500).fadeOut(1000);
      $("#well-play1").fadeOut(900);
      $("#well-play2").show(900);
    }
    $(".player1-roll-number").text(player1RollNumber);
    $(".player1-turn-score").text(player1.turnScore);
});
$("#btn-hold"),click(function(event){
  event.preventDefault();
  player1.score();
  $(".player1-total-score").text(player1.totalScore);
    $(".player1-roll-number").text("");
    $(".player1-turn-score").text(player1.turnScore);
    if (player1.totalScore >= 100) {
    $("#game-section").fadeOut(400);
    $(".player1-victory").show().fadeOut(1200);
  } else {

  $(".player2-scored1").hide();
  $("#player2").show(900);
  $("#player1").hide(900);
  $(".hold").show().fadeOut(1500);
  }
});
