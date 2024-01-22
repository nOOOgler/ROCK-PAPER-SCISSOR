let choices = document.querySelectorAll("img");
let msg = document.querySelector("#msg")
let user = document.querySelector("#userscore");
let comp = document.querySelector("#compscore");
let userCount = 0;
let compCount = 0;

// console.log(msg)
const genCompChoice=() =>{
    let options = ["rock", "paper", "scissor"];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}

const showWinner=(userwin, userChoice, compChoice) => {
    if(userwin){
        userCount++;
        user.innerText = userCount;
        msg.innerText =`You Win!!`;
         msg.style.backgroundColor ="green";
    }
    else{
        compCount++;
        comp.innerText = compCount;
        msg.innerText =`Comp Win!!`;
         msg.style.backgroundColor ="red";
    }
}

const gameDraw=() =>{
       msg.innerText = `Game Drawn. Play Again!!`
      msg.style.backgroundColor = "yellow";
      msg.style.color = "black";
}
const playGame =(userChoice) =>{
    const compChoice = genCompChoice();
    // console.log(compChoice);
    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userwin = true;
        if(userChoice==="rock"){
            userwin= compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userwin= compChoice==="scissor"?false: true;
        }
        else{
            userwin = compChoice==="rock"? false:true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    })
})