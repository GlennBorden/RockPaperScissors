const userText = document.querySelector("#userText");
const cpuText = document.querySelector("#cpuText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let user;
let cpu;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    user = button.textContent;
    computerTurn();
    userText.textContent = `user: ${user}`;
    cpuText.textContent = `cpu: ${cpu}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3 + 1);

    switch(randNum){
        case 1:
            cpu = "rock";
            break;
        case 2:
            cpu = "paper";
            break;
        case 3:
            cpu = "scissors";
            break;
    }
}
function checkWinner(){
    if(user === cpu){
        return "Draw!";
    }
    if(cpu === "rock"){
        if(user === "paper") {
            return "You Win!";
        }
        else {
            return "You Lose!";
        }
    }
    if(cpu === "paper"){
        if(user === "scissors") {
            return "You Win!";
        }
        else {
            return "You Lose!";
        }
    }
    if(cpu === "scissors"){
        if(user === "rock") {
            return "You Win!";
        }
        else {
            return "You Lose!";
        }
    }
}
    /*
    if(user === cpu){
        return "Draw!";
    }
    if(cpu === "rock"){
        return (user === "paper") ? "You Win!" : "You Lose!";
    }
    else if(cpu === "paper"){
        return (user === "scissors") ? "You Win!" : "You Lose!";
    }
    else if(cpu === "scissors"){
        return (user === "rock") ? "You Win!" : "You Lose!";
    }
}
*/