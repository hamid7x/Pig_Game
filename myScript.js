//starting new game
const resetGame=document.querySelector('.btn--new');
resetGame.addEventListener('click',function(){
    document.querySelectorAll('.score').forEach(el =>{
        el.textContent='0';
    })
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player').classList.remove('player--winner','name');
})

const playerNumberOne = document.querySelector('.player--0');
const playerNumberTwo = document.querySelector('.player--1');
let scorePlayerOne=0;
let scorePlayerTwo=0;
let current=0;
//rolling the dice
const rollDice = document.querySelector('.btn--roll');
rollDice.addEventListener('click',function(){
    let newDiceValue=Math.trunc(Math.random()*6)+1;
    document.querySelector('.dice').removeAttribute('src');
    document.querySelector('.dice').setAttribute('src',`dice-${newDiceValue}.png`);
    document.querySelector('.dice').style.display='block';
    
    //set current score
    if(newDiceValue === 1){
        if(playerNumberOne.classList.contains('player--active')){
            playerNumberOne.classList.remove('player--active');
            playerNumberTwo.classList.add('player--active');
            scorePlayerOne=0;
            document.querySelector('#score--0').textContent=scorePlayerOne;
            current=0;
            document.querySelector('#current--0').textContent=current;
        }else{
            playerNumberTwo.classList.remove('player--active');
            playerNumberOne.classList.add('player--active');
            scorePlayerTwo=0;
            document.querySelector('#score--1').textContent=scorePlayerTwo;
            current=0;
            document.querySelector('#current--1').textContent=current;
        }
    }
    
   else if(playerNumberOne.classList.contains('player--active')){
        current += newDiceValue;
        document.querySelector('#current--0').textContent=current;
    }else{
        current += newDiceValue;
        document.querySelector('#current--1').textContent=current;
    }
})
//hod click
const hold = document.querySelector('.btn--hold');
hold.addEventListener('click',function(){
    if(playerNumberOne.classList.contains('player--active')){
        playerNumberOne.classList.remove('player--active');
        playerNumberTwo.classList.add('player--active');
        scorePlayerOne+=current;
        document.querySelector('#score--0').textContent=scorePlayerOne;
        if(scorePlayerOne >= 30){
            playerNumberOne.classList.add('player--winner','name');
        } 
        current=0;
        document.querySelector('#current--0').textContent=current;
    }else{
        playerNumberTwo.classList.remove('player--active');
        playerNumberOne.classList.add('player--active');
        scorePlayerTwo+=current;
        document.querySelector('#score--1').textContent=scorePlayerTwo;
        if(scorePlayerTwo >= 30){
            playerNumberTwo.classList.add('player--winner','name');
        } 
        current=0;
        document.querySelector('#current--1').textContent=current;
    }
});