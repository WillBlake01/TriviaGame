var radioButton = $(".radioButton");
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var answers = [];

//on start
$("#start").on("click", function() {
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
	if (answers === radioButton.values()) {
	correctAnswers++;
	console.log(correctAnswers);
} else {
	incorrectAnswers++;
	console.log(incorrectAnswers);
}
});