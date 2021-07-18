let userScore =0;
let computerScore =0;
let computerScore_h1=document.getElementById('comp-scr');
let userScore_h1=document.getElementById('user-scr');
let result_div =document.querySelector('.result');
let rock=document.getElementById('r');
let paper=document.getElementById('p');
let scissors=document.getElementById('s');

function getComputerChoice(){
    let choices=["r","p","s"];
    let random=(Math.floor(Math.random()*3));
   return choices[random];
}

function convert(letter){
    if (letter==="r") {
        return "Rock"
    }
    else if(letter==="p"){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}
function win(user,computer){
    userScore++;
    userScore_h1.innerText=userScore;
    let result= "You got "+convert(user)+" and computer got "+convert(computer)+" .YOU WIN!!!😊";
    result_div.innerText=result;
}
function loss(user,computer){
    computerScore++;
    computerScore_h1.innerText=computerScore;
    let result= "You got "+convert(user)+" and computer got "+convert(computer)+" .YOU LOOSE!!!😔";
    result_div.innerText=result;
}

function draw(user,computer) {
    computerScore_h1.innerText=computerScore;
    userScore_h1.innerText=userScore;
    let result= "You got "+convert(user)+" and computer got "+convert(computer)+" .IT'S A DRAW!!!😑";
    result_div.innerText=result;
}

function game(userChoice){
   let computerChoice=getComputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
            loss(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
        break;
    }
}

function main() {
    rock.addEventListener('click', function(){
        game("r");
    })
    paper.addEventListener('click', function(){
        game("p");
    })
    scissors.addEventListener('click', function(){
        game("s");
    })
}
main();
