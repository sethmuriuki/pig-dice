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
$(".btn-new").click(function(event) {
  $("#new-players").show();
  $("#pig").hide(500);
});
$(".btn").click(function(event) {
  event.preventDefault();
  var player1 = $("#new-player-one").val();
  var player2 = $("#new-player-two").val();
  $("#playerone").text(player1);
  $("#playertwo").text(player2);
  $("#new-players").hide(500);
});

$(".player1-total-score").html("<span class='player1-total-score'>" + player1.totalScore + "</span>");

$("#btn-roll").click(function(event) {
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
$("#btn-hold"), click(function(event) {
  event.preventDefault();
  player1.score();
  $(".player1-total-score").text(player1.totalScore);
  $(".player1-roll-number").text("");
  $(".player1-turn-score").text(player1.turnScore);
  if (player1.totalScore >= 100) {
    $(".player1-victory").show().fadeOut(1200);
  } else {

    $(".player2-scored1").hide();
    $("#player2").show(900);
    $("#player1").hide(900);
  }
});

$(".player2-total-score").html("<span class='player2-total-score'>" + player2.totalScore + "</span>");

 $("#btn-roll1").click(function(event) {
   event.preventDefault();
   var player2RolledNumber = player2.roll();
   if (player2RolledNumber === 1) {
     $(".player2-scored1").show().fadeOut(1000);
     $("#well-play2").fadeOut(1000);
     $("#well-play1").show(900);
   }
   $(".player2-rolled-number").text(player2RolledNumber);
   $(".player2-turn-score").text(player2.turnScore);
 });
 $("#btn-hold1").click(function(event) {
    event.preventDefault();
    player2.score();
    $(".player2-total-score").text(player2.totalScore);
    $(".player2-roll-number").text("");
    $(".player2-turn-score").text("");
    if (player2.totalScore >= 100) {
      $(".player2-victory").show().fadeOut(1200);
    } else {
    $("#well-play1").show(900);
    $("#well-play2").hide(900);

    }
  });
