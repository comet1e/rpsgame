const computerChoice =["rock","paper","scissors"];

//const computerSelection = computerChoose; 

let scoreP=0;
let scoreC=0;


const getComputerChoice = () =>  {
  
    let i=0;
    i= Math.floor(Math.random()*computerChoice.length);
    return computerChoice[i];
    
};

let computerSelection = getComputerChoice();


// console.log(`computer picked : ${computerChoose}`);   // console.log("computer choose: "+ computerChoose);



// let playerSelection = 'rock';
// // const getPlayerchoice = () =>{
   
// //    for (let i=0; i <1; i++){
// //     do {
// //         let playerChoose = prompt("choose rock paper or scissors"); }
// //     while ((playerChoose.toLowerCase() !== 'rock') || (playerChoose.toLowerCase() !== 'paper')|| (playerChoose.toLowerCase() !== 'scissors')) {
// //         alert("please key in a valid selection !");
 
// //    }
   

// // } 

// // getPlayerchoice();
// console.log("player chooses: " +playerSelection);

// function playRound () {
    
//         if (userSelections == computerSelection){
//              return "tie";
//         }
            
//         else if (computerSelection == "rock"){
//             return (userSelections == "paper") ? "you win!" : "you lose!";
            
//         } else if (computerSelection == "paper"){
//             return (userSelections == "scissors") ? "you win!" : "you lose!";
            
//         } else if (computerSelection == "scissors"){
//             return (userSelections == "rock") ? "you win!" : "you lose!";
            
//         }
//     };
 
// function playRound (userSelections, computerSelection) {
    
//     if (userSelections === computerSelection){
//          return "tie";
          
         
//     }
        
//     else if ((userSelections==='rock' && computerSelection==='paper') || (userSelections==='paper' && computerSelection==='scissors') || (userSelections==='scissors' && computerSelection==='rock')){

//         return "You lose!";
        
//     }
//     else {
//         return "you win!";
        
//     }
//     // else if(playerSelection=='rock' && computerSelection=='scissors'){

//     //     return console.log("You win!, scissors beats rock");
//     // }
//     // else {
//     //     return console.log("Tie!");
//     }
    
    
// };

// // playRound(playerSelection, computerSelection);



// function game(){
//     // for (i=0;i<5;i++){
//         let round=0+i;
//         console.log(`ROUND ${round+1}`);
//         playRound(playerSelection, computerSelection);
        
//     // }
//     return scoreC, scoreP;
    

// }

// function start(){
//     for (i=0;i<5;i++){
//         game();
//     };
// } ;

// start();

// const btn1 = document.createElement('button');
// const btn2 = document.createElement('button');
// const btn3 = document.createElement('button');

// btn1.addEventListener('click', () => {
//     playRound(playerSelection, computerSelection);
// })

// btn2.addEventListener('click', () => {
//     playRound(playerSelection, computerSelection);
// })

// btn3.addEventListener('click', () => {
//     playRound(playerSelection, computerSelection);
// })

const userSelections = document.querySelectorAll('[data-selection]');
const computerText = document.querySelector("#computerScore");
const playerText = document.querySelector("#playerScore");
let winnerText = document.querySelector("#winner");

function playRound (userSelected, computerSelection) {
    
    if (userSelected === computerSelection){
         return "tie";
    }
        
    else if (computerSelection === "rock"){
        return (userSelected === "paper") ? "you win!" : "you lose!"
        
    } else if (computerSelection === "paper"){
        return (userSelected === "scissors") ? "you win!" : "you lose!"
        
    } else {
        return (userSelected === "rock") ? "you win!" : "you lose!"
        
    }
    
};


userSelections.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const userSelected = selectionButton.dataset.selection;
        userSelect(userSelected);
        getComputerChoice();
        playRound(userSelected, computerSelection);
        playerText.textContent = `player: ${userSelected}`;
        computerText.textContent = `Computer: ${computerSelection}`;
        winnerText.textContent = `${playRound(userSelected, computerSelection)}`
    })
    
});


function userSelect(selection){
   console.log(` com: ${computerSelection}`) ;
    console.log(`player: ${selection}`);
}

