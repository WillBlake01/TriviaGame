// On page load
$(document).ready(function () {

  var correctAnswers = '';
  var incorrectAnswers = '';
  var unanswered = '';

  var answers = [];

  $('#quiz').hide();

  // Start button functionality
  $('#start').on('click', function () {
    $('#start').hide();
    $('#quiz').show();
    $('.container').toggleClass('quizContainer');

    // Start counter
    var count = 90;

    var counter = setInterval(timer, 1000);

    function timer() {
      count = count - 1;
      if (count <= 0) {
        clearInterval(counter);

        return;
      }

      document.getElementById('timer').innerHTML = count + ' seconds';

      // End counter
      // End start button functionality
    }
  });

  // Submit button functionality
  $('#submit').on('click', function () {

    $('#quiz').hide();
    $('.container').toggleClass('quizContainer');

    $('#results').html('<h3>All Done!!!</h3>');
    $('#results').append('<p>Correct Answers: ' + correctAnswers + '</p>');
    $('#results').append('<p>Incorrect Answers: ' + incorrectAnswers + '</p>');
    $('#results').append('<p>Unanswered: ' + unanswered + '</p>');

    // End submit button functionality

    if (answers === radioButton.values()) {
      correctAnswers++;
      console.log(correctAnswers);
    } else {
      incorrectAnswers++;
      console.log(incorrectAnswers);
    }

  });

});
