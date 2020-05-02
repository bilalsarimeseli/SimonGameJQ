var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  let sound = new Audio("sounds/" + randomChosenColour + ".mp3");
  sound.play();
}

$(".btn").click(function () {
  var userChoseColour = $(this).attr("id");
  userClickedPattern.push(userChoseColour);
});
