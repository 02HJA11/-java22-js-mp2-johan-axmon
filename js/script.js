let scoreYou = 0;
let scoreCom = 0;
let winner = document.querySelector(".winner");
let scoreStatus = document.querySelector(".score h1");



const input = document.querySelector('input');
input.addEventListener('input', updateValue);
let para = document.querySelector('p');


function updateValue(e){
    para.innerText = e.target.value;
}
let name = para.innerText;
function stoneSelected() {
   let name = para.innerText;
if(scoreCom < 3 && scoreYou < 3) {
 document.querySelector(".selectionYou").src = "./images/rock.jpg";
   letComSelection = Math.floor(Math.random() * 3);
   switch(letComSelection){
    case 0:
    document.querySelector(".selectionAI").src = "./images/rock.jpg";
    scoreStatus.innerText = name + ": " + scoreYou +  " - " + "draw"  + " - com: " + scoreCom;
    break;
    case 1:
    document.querySelector(".selectionAI").src = "./images/scissors.jpg";
    scoreYou = scoreYou +1;
    scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for you" + " - Com: " + scoreCom;
    if(scoreYou==3){
        winner.innerText = name + " is the winner";
     }
    break;
    case 2:
    document.querySelector(".selectionAI").src = "./images/bag.jpg";
    scoreCom = scoreCom +1;
    scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for com" + " - Com: " + scoreCom;
    if(scoreCom == 3){
        winner.innerText = "The computer won this time";
     }
    break;

   }
}
}

function scissorsSelected(){
   let name = para.innerText;
    if(scoreCom < 3 && scoreYou < 3){
    document.querySelector(".selectionYou").src = "./images/scissors.jpg";
    letComSelection = Math.floor(Math.random() * 3);
    switch(letComSelection){
     case 0:
     document.querySelector(".selectionAI").src = "./images/rock.jpg";
     scoreCom = scoreCom +1;
     scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for com" + " - Com: " + scoreCom;
     if(scoreCom == 3){
        winner.innerText = "The computer won this time";
     }
     break;
     case 1:
     document.querySelector(".selectionAI").src = "./images/scissors.jpg";
     scoreStatus.innerText = name + ": " + scoreYou +  " - " + "draw"  + " - com: " + scoreCom;
     break;
     case 2:
     document.querySelector(".selectionAI").src = "./images/bag.jpg";
     scoreYou = scoreYou +1;
     scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for you" + " - Com: " + scoreCom;
     if(scoreYou==3){
        winner.innerText = name + " is the winner";
     }
     break;
    }
    }
}

function paperSelected(){
   let name = para.innerText;
   if(scoreCom < 3 && scoreYou < 3){
    document.querySelector(".selectionYou").src = "./images/bag.jpg";
    letComSelection = Math.floor(Math.random() * 3);
    switch(letComSelection){
     case 0:
     document.querySelector(".selectionAI").src = "./images/rock.jpg";
     scoreYou = scoreYou +1;
     scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for you" + " - Com: " + scoreCom;
     if(scoreYou==3){
        winner.innerText = name + " is the winner";
     }
     break;
     case 1:
     document.querySelector(".selectionAI").src = "./images/scissors.jpg";
     scoreCom = scoreCom +1;
     scoreStatus.innerText = name + ": " + scoreYou + " - " + "score for com" + " - Com: " + scoreCom;
     if(scoreCom == 3){
        winner.innerText = "The computer won this time";
     }
     break;
     case 2:
     document.querySelector(".selectionAI").src = "./images/bag.jpg";
     scoreStatus.innerText = name + ": " + scoreYou +  " - " + "draw"  + " - com: " + scoreCom;
     break;
    }
   }
}

function reset(){
    scoreYou = 0;
    scoreCom = 0;
    scoreStatus.innerText = "scores reset";
    winner.innerText = "winners name will be here"
}