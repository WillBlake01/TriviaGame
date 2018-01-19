$(document).ready(function () {

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var answers = [];

$("#quiz").hide();

//on start
$("#start").on("click", function() {
$("#start").hide();
$("#quiz").show();
$(".container").toggleClass("quizContainer");

	//counter
	var count=90;

	var counter=setInterval(timer, 1000);

	function timer() {
		count=count-1;
		if (count <= 0)
			{
				clearInterval(counter);

				return;
			}
	document.getElementById("timer").innerHTML=count + " seconds";
}

//on submit
});

$("#submit").on("click", function() {

	$("#quiz").hide();
	$(".container").toggleClass("quizContainer");



	$("#results").html("<h3>All Done!</h3>");
	$("#results").append("<p>Correct Answers: " + correctAnswers + "</p>");
	$("#results").append("<p>Incorrect Answers: " + incorrectAnswers + "</p>");
	$("#results").append("<p>Unanswered: " + unanswered + "</p>");


	if (answers === radioButton.values()) {
	correctAnswers++;
	console.log(correctAnswers);
	} else {
	incorrectAnswers++;
	console.log(incorrectAnswers);
}

});

});
