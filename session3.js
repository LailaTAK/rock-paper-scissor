function computerMove(){
    const randomNumber = Math.random();
    if(randomNumber <= 1/3){
        return 'rock';
    }
    else if(randomNumber <= 2/3){
        return 'paper';
    }
    else{
        return 'scissor';
    }
}
const score = {
    wins: 0,
    losses:0,
    ties:0
}
function playGame(playerMove){
const pickedComputerMove  = computerMove();
document.querySelector('.moves').innerHTML=`
    <img class="im" src="${playerMove}-emoji.png" >
    <img class="im" src="${pickedComputerMove}-emoji.png" >`;
if(playerMove === 'rock'){
switch(pickedComputerMove){
case 'rock':
    score.ties++;
    document.querySelector(".status").innerHTML='Ties!';
    break;
case 'paper':
    score.losses++;
    document.querySelector(".status").innerHTML='You Lose!';
    break;
case 'scissor':
    score.wins++;
    
    document.querySelector(".status").innerHTML='You Win!';
    break;
}

}
else if(playerMove === 'paper'){
switch(pickedComputerMove){
case 'rock':
    score.wins++;
    document.querySelector(".status").innerHTML='You Win!';
    break;
case 'paper':
    score.ties++;
    document.querySelector(".status").innerHTML='Ties!';
    break;
case 'scissor':
    score.losses++;
    document.querySelector(".status").innerHTML='You Lose!';
    break;
}
}
else{
switch(pickedComputerMove){
case 'rock':
    score.losses++;
    document.querySelector(".status").innerHTML='TYou Lose!';
    break;
case 'paper':
    score.wins++;
    document.querySelector(".status").innerHTML='You Win!';
    break;
case 'scissor':
    score.ties++;
    document.querySelector(".status").innerHTML='Ties!';
    break;
}
}
document.querySelector('.result').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
console.log(score);

}
function resetCount(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    document.querySelector('.result').innerHTML='Wins: 0, Losses: 0, Ties= 0';
}
let auto=false;
let id;
function autoPlay(){
    auto=!auto;
    if(auto){
        id=setInterval(function(){
            playGame(computerMove());
        },1000);

        document.querySelector(".autoplay").innerHTML='Stop';
    } else {
        clearInterval(id);
        document.querySelector(".autoplay").innerHTML='Auto play';
    }
}