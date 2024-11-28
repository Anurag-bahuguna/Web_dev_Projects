let score= JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie : 0
};

updateScoreElement();
    let isAutoPlaying = false;
    let intervalId;

    function autoPlay(){
        if(!isAutoPlaying){
            intervalId= setInterval(function(){
                const playerMove = pickComputerMove();
                playGame(playerMove);
            },1000);
            isAutoPlaying= true;
        }else{
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
}

document.querySelector('.js-rock-btn')
    .addEventListener('click',()=>{
        playGame('rock');
    });
document.querySelector('.js-paper-btn')
    .addEventListener('click',()=>{
        playGame('paper');
    });
document.querySelector('.js-scissors-btn')
    .addEventListener('click',()=>{
        playGame('scissors');
    });
function playGame(playerMove){
const computerMove = pickComputerMove();

let result='';

if(playerMove === 'scissors'){
    if(computerMove==='rock'){
        result= 'you lose';
    }else if(computerMove ==='paper'){
        result= 'you win';
    }else if(computerMove ==='scissors'){
        result ='tie';
    }
}else if(playerMove==='paper'){
    if(computerMove==='rock'){
        result= 'you win';
    }else if(computerMove ==='paper'){
        result= 'tie';
    }else if(computerMove ==='scissors'){
        result ='you lose';
    }
}else if(playerMove ==='rock'){
    if(computerMove==='rock'){
        result= 'tie.';
    }else if(computerMove ==='paper'){
        result= 'you lose';
    }else if(computerMove ==='scissors'){
        result ='you win';
    }
}

if(result=== 'you win'){
    score.win+=1;
}else if(result==='you lose'){
    score.lose+=1;
}else if(result==='tie'){
    score.tie+=1;
}

localStorage.setItem('score',JSON.stringify(score));

//1) now our score also update on page
updateScoreElement();

//2) now our result also update on page
document.querySelector('.js-result').innerHTML =result;

//3) now our moves also update on page
document.querySelector('.js-moves')
    .innerHTML = `you <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
computer`;
}

function updateScoreElement(){
document.querySelector('.js-score')
.innerHTML=`win: ${score.win},lose: ${score.lose},tie: ${score.tie}`;

}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';

if(randomNumber >=0 && randomNumber <1/3){
    computerMove = 'rock' ;
}else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove = 'paper';
}else if(randomNumber >=2/3 && randomNumber < 1){
    computerMove ='scissors' ;
}
return computerMove;
}