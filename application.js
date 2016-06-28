"use strict";




$(document).ready(function() {
  // player.name = prompt("What's your name?");
  // $("#interface").html(("Hello, " + player.name + ". You have " + player.cash + " dollars."));

  function d10() {
    return Math.floor(Math.random() * 10 + 1);
  }

  function validNumber(input, min, max) {
    input = Number(input);
    if (isNaN(input) || input < min || input > max) {
      return false;
    } else {
      return true;
    }
  }

  function validBet(input) {
    return validNumber(input, MIN_BET, MAX_BET);
  }

  function validGuess(input) {
    return validNumber(input, MIN_GUESS, MAX_GUESS);
  }

  var outcome;
  var player = {cash: 100, bet: null, guess: null};
  var $cash = $('#cash');
  var $current_bet = $('#current_bet');
  var $current_guess = $('#current_guess');
  var $last_roll = $("#last_roll");
  var MIN_BET = 5
  var MAX_BET = 10
  var MIN_GUESS = 1
  var MAX_GUESS = 10

  function updateBet() {
    $current_bet.text(player.bet);
  }

  function updateGuess() {
    $current_guess.text(player.guess);
  }

  function resetBetAndGuess() {
    player.bet = player.guess = null;
    updateGuess();
    updateBet();
  }


  $("#bet_trigger").on('click', function(){
    player.bet = $("#bet_value").val();
    updateBet();
  });

  $("#guess_trigger").on('click', function(){
    player.guess = $("#guess_value").val();
    updateGuess();
  });

  $("#roll_d10").on('click', function() {
    if (validGuess(player.guess) && validBet(player.bet)) {
      outcome = d10();
      $last_roll.text(outcome);
      switch (player.guess) {
        case (outcome + 1):
        case (outcome - 1):
          alert("Pretty close! It was " + outcome + ". You still have " + player.cash + " dollars.");
          break;
        case (outcome):
          player.cash += player.bet;
          $cash.text(player.cash);
          alert("You got it! It was " + outcome + ". Now you have " + player.cash + " dollars.");
          break;
        default:
          player.cash -= player.bet;
          $cash.text(player.cash);
          alert("Wrong! It was " + outcome + ". Now you have " + player.cash + " dollars.");
          break;
      }
    } else {
      $("#jumbotron").text("Invalid input. Please make a bet between " + MIN_BET + " and " + MAX_BET + " and a guess between " + MIN_GUESS + " and " + MAX_GUESS);
    }
  });

});

  // while (player.cash >= 5)
  //   playRound();


  // function playRound() {
  //   var bet = validNumber(prompt("Please place a bet between 5 and 10 dollars."), 5, 10);
    
  //   player.guess = validNumber(prompt("Guess a number between 1 and 10"), 1, 10);
    
  //   var answer = Math.floor(Math.random() * 10 + 1);
    
  //   console.log(answer);
    



  // }
// };