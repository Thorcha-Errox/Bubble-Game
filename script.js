function bubble(){
    let clutter = "";
    for(let i = 0; i <= 191; i++){
        clutter += `<div id="bubble"><h4>${Math.floor(Math.random()*10)}</h4></div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
let timer = 60;
let timerInt;
function runTime(){
    timer = 60;
    document.querySelector("#timerval").textContent = timer;
    timerInt = setInterval(function (){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `
                    <div class="gameover-container">
                        <h1>GAME OVER</h1>
                        <button id="startBtn">Start Game</button>
                    </div>
            `;
            document.querySelector("#startBtn").addEventListener("click", startGame);
        }
    }, 1000);
}
let hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function startGame(){
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    runTime();
    getNewHit();
    bubble();
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    const clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        bubble();
        getNewHit();
    }
});
document.querySelector("#startBtn").addEventListener("click", function(){
    startGame();
});
