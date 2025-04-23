function bubble(){
    let clutter = "";
    for(i=0;i<=191;i++){
        clutter += `<div id="bubble"><h4>${Math.floor(Math.random()*10)}</h4></div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
let timer = 60;
function runTime(){
      let timerInt = setInterval(function (){
            if(timer>0){
                timer--;
                document.querySelector("#timerval").textContent = timer;
            }
            else {
                clearInterval(timerInt);
                document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`
            }
        },1000);
    }  
let hitrn = 0; 
function getNewHit(){
    hitrn =  Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}
let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        bubble();
        getNewHit();
    }
})
bubble();
runTime();
getNewHit();
