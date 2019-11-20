// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){
    let userChoice = $("input").val();
    let computerChoice;
    let randomNumber = Math.random();
    userChoice = userChoice.toLowerCase();
    
    if(randomNumber > 0 && randomNumber < .4){
        computerChoice = "rock"
    }
    if(randomNumber > .4 && randomNumber < .7){
        computerChoice = "paper"
    }
    if(randomNumber > .7 && randomNumber < 1){
        computerChoice = "scissors"
    };

    $("#userChoice").html(userChoice);
    $("#computerChoice").html(computerChoice);

    if(userChoice == "rock" && computerChoice == "rock"){
        $("#text").html("It's a tie!");
    }else if(userChoice == "paper" && computerChoice == "paper"){
        $("#text").html("It's a tie!");
    }else if(userChoice == "scissors" && computerChoice == "scissors"){
        $("#text").html("It's a tie!");

    }else if(userChoice == "rock" && computerChoice == "paper"){
        $("#text").html("Computer Wins!");
    }else if(userChoice == "rock" && computerChoice == "scissors"){
        $("#text").html("You Win!");
    
    }else if(userChoice == "paper" && computerChoice == "scissors"){
        $("#text").html("Computer Wins!");
    }else if(userChoice == "paper" && computerChoice == "rock"){
        $("#text").html("You Win!");

    }else if(userChoice == "scissors" && computerChoice == "rock")
        $("#text").html("Computer Wins!");
    else if(userChoice == "scissors" && computerChoice == "paper"){
        $("#text").html("You Win!");

} else{ $("#text").html("Thats not a valid input");
}
});
// DOCUMENT READY FUNCTION BELOW

