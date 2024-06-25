let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user_score");
const compscorepara=document.querySelector("#comp_score")

const drawGame=()=>{
    console.log("game was draww");
    msg.innerText="Game was draw! play again";
    msg.style.backgroundColor="black"
}

const genCompChoice=()=>{
    let options=["rock","scissor","paper"];
    //rock ,scissor papper 
    const rndmIdx=Math.floor(Math.random()*3);
     return options[rndmIdx];

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("you lose!");
         msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red"
    }

}

const playGames=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generaate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);
    if(userChoice==compChoice){
       //draw game 
       drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true; 
        }
        showWinner(userWin,userChoice,compChoice);
    }

};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
       playGames(userChoice);
       

    });
});