var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  // When a user clicks on a button, the corresponding sound plays.
  playSound(userChosenColour);
});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  //PlaySound() works for both playing sound in nextSequence() and when the user clicks a button.
  playSound(randomChosenColour);
}

//PlaySound() function takes a single input parameter "name".
function playSound(name) {
  //The code that plays sound in the nextSequence() function is added to playSound().
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
