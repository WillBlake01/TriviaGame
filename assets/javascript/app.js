// On page load
$(document).ready(function () {

  var panel = $('#quiz');

  // Question set
  var questions = [{
    question: "How many clubs competed in the Premier League's first season, in 1992-93?",
    answers: ["18", "22", "24"],
    correctAnswer: "22"
  }, {
    question: "Who has played in a Merseyside derby, a North London derby, a Manchester Derby, a Tyne-Wear derby and a West London derby in the Premier League?",
    answers: ["Michael Owen", "Emmanuel Adebayor", "Louis Saha"],
    correctAnswer: "Louis Saha"
  }, {
    question: "Which club has scored the most goals from headers in the Premier League?",
    answers: ["Arsenal", "Stoke City", "Chelsea"],
    correctAnswer: "Arsenal"
  }, {
    question: "Nicolas Anelka is one of two players to have represented Liverpool, Chelsea, and Arsenal in the Premier League. Who is the other?",
    answers: ["Kolo Toure", "William Gallas", "Yossi Benayoun"],
    correctAnswer: "Yossi Benayoun"
  }, {
    question: "Which Premier League side plays home games at Old Trafford Stadium?",
    answers: ["Liverpool", "Manchester United", "Newcastle United"],
    correctAnswer: "Manchester United"
  }, {
    question: "Who has scored the most Premier League goals for one club?",
    answers: ["Thierry Henry at Arsenal", "Wayne Rooney at Manchester United", "Frank Lampard at Chelsea"],
    correctAnswer: "Wayne Rooney at Manchester United"
  }, {
    question: "Which team has conceded the most goals in the Premier League (1,231 goals in 25 seasons)?",
    answers: ["Tottenham Hotspur", "Aston Villa", "Newcastle United"],
    correctAnswer: "Tottenham Hotspur"
  }, {
    question: "Which team have managed to finish third in the league despite having a negative goal difference (-4)?",
    answers: ["Norwich City", "Blackburn Rovers", "Arsenal"],
    correctAnswer: "Norwich City"
  }, {
    question: "Which team is the only to manage an unbeaten record in the Premier League as of 2018?",
    answers: ["Everton", "Blackburn Rovers", "Arsenal"],
    correctAnswer: "Arsenal"
  }, {
    question: "Which team is the best team in the Premier League?",
    answers: ["Arsenal", "Chelsea", "Manchester United"],
    correctAnswer: "Arsenal"
  }];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    $('.container').toggleClass('quizContainer');

    timer = setInterval(game.countdown, 1000);

    $("#timer").prepend("<h3>Time Remaining: <span id='counter-number'>120</span> Seconds</h3>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h4>" + questions[i].question + "</h4>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<br><br><button id='done'>Done</button>");
  },

  done: function() {
    $('.container').toggleClass('quizContainer');

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});

});
