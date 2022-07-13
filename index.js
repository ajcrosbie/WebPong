function testingStuff(){
    paddle1 = document.getElementById("leftPaddle");
    paddle2 = document.getElementById("rightPaddle");
    ball = document.querySelector(".ball");
    alert(ball);
    var t1 = window.getComputedStyle(ball).top;
    alert(t1);
    ball.style.left = "300px";
    var t1 = window.getComputedStyle(ball).left;
    alert(t1);
}


function paddleSpeedChanger(){
    window.p1Speed = 0;
    window.p2Speed = 0;
    if (window.upHeld && window.downHeld){window.p1Speed = 0;}
    else{
        if(window.wHeld){window.p1Speed = -2;}
        if (window.sHeld){window.p1Speed = 2;}
    }
    if (window.wHeld && window.dHeld){window.p2Speed = 0;}
    else{
        if(window.upHeld){window.p2Speed = -2;}
        if (window.downHeld){window.p2Speed = 2;}
    }
}


function movePaddles(){
    var paddle = document.querySelector("#leftPaddle");
    var temp = window.getComputedStyle(paddle).top;
    var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    paddleTop = paddleTop+window.p1Speed;
    document.querySelector("#leftPaddle").style.top = paddleTop + "px";
    paddle = document.querySelector("#rightPaddle");
    var temp = window.getComputedStyle(paddle).top;
    var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    paddleTop = paddleTop+window.p2Speed;
    document.querySelector("#rightPaddle").style.top = paddleTop + "px";
}

function paddleArea(){
    var temp = window.getComputedStyle(document.querySelector(".gameArea")).height;
    var gameHeight = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector("#leftPaddle")).top;
    var leftTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector("#rightPaddle")).top;
    var rightTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".paddle")).height;
    var paddleHeight = Math.floor(Number(temp.slice(0, temp.length-2)));
    if (leftTop<0){
        document.querySelector("#leftPaddle").style.top = "0px";
    }
    if (leftTop > gameHeight-paddleHeight){
        document.querySelector("#leftPaddle").style.top = gameHeight-paddleHeight+"px";
    }
    
    if (rightTop<0){
        document.querySelector("#rightPaddle").style.top = "0px";
    }
    if (rightTop > gameHeight-paddleHeight){
        document.querySelector("#rightPaddle").style.top = gameHeight-paddleHeight+"px";
    }
}


function bounceWall(){
    var ball = document.querySelector(".ball");
    var temp = window.getComputedStyle(ball).width;
    var ballWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".paddle")).height;
    var paddleHeight = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(ball).top;
    var ballTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".gameArea")).height;
    var gameHeight = Math.floor(Number(temp.slice(0, temp.length-2)));
    
    if (ballTop<(-paddleHeight+ballWidth)){window.ballDirection = window.ballDirection *-1;}
    if (ballTop>(gameHeight-paddleHeight)){
        window.ballDirection = window.ballDirection *-1;
    }

}


function increasePoints(scorer){
    if (scorer == "player 1"){
        var c = document.querySelector(".leftScore").textContent;
        var c = Number(c) + 1;
        document.querySelector(".leftScore").textContent = String(c);
    } else{
        var c = document.querySelector(".rightScore").textContent;
        var c = Number(c) + 1;
        document.querySelector(".rightScore").textContent = String(c);
    }
}
function intPaddles(){
    var temp = window.getComputedStyle(document.querySelector("#rightPaddle")).width;
    var paddleWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".gameArea")).width;
    var gameWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    
    temp = gameWidth-paddleWidth*2.1;
    // var temp = window.getComputedStyle(document.querySelector("#rightPaddle")).left;
    // temp = Number(temp.slice(0, top.length-2));
    // temp = Math.floor(temp);
    temp = Math.floor(temp);
    document.querySelector("#rightPaddle").style.left = temp + "px";
    console.log(temp)

    temp = window.getComputedStyle(document.querySelector("#leftPaddle")).left;
    temp = Number(temp.slice(0, top.length-2));
    temp = Math.floor(temp);
    document.querySelector("#leftPaddle").style.left = temp + "px";
}
function resetGame(){
    document.getElementById("leftPaddle").style.top = window.paddleStart;
    document.getElementById("rightPaddle").style.top = window.paddleStart;
    document.querySelector(".ball").style.left = window.ballStartLeft;
    document.querySelector(".ball").style.top = window.ballStartTop;
    window.ballDirection = 0;
}

function bouncePaddle(ballSpeed, ballDirection, paddleSpeed){
    ballSpeed = ballSpeed*-1;
    ballDirection = ballDirection+paddleSpeed;
    window.ballSpeed = ballSpeed;
    window.ballDirection = ballDirection+paddleSpeed;
}
function checkPaddle(paddle){
    var ball = document.querySelector(".ball");
    var temp = window.getComputedStyle(ball).left;
    var ballLeft = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(ball).top;
    var ballTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(ball).width;
    var ballWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    
    if (paddle == "paddle1"){
        var paddle = document.querySelector("#leftPaddle")
        var temp = window.getComputedStyle(paddle).left;
        var paddleLeft = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).top;
        var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).width;
        var paddleWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).height;
        var paddleHeight = Math.floor(Number(temp.slice(0, temp.length-2)));

        if (ballLeft < paddleWidth*-1-7){
            // console.log("here0");
            if (ballTop+paddleHeight > paddleTop && ballTop-ballWidth <= paddleTop){       
                    return "bounce";
            }
        }
        return "none";
    }

    if (paddle == "paddle2"){ 
        var paddle = document.querySelector("#rightPaddle")
        var temp = window.getComputedStyle(paddle).left;
        var paddleLeft = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).top;
        var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).width;
        var paddleWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
        var temp = window.getComputedStyle(paddle).height;
        var paddleHeight = Math.floor(Number(temp.slice(0, temp.length-2)));

        if (ballLeft > paddleLeft-paddleWidth*2+5){
            // console.log("here0");
            // console.log(ballTop);
//            console.log(paddleTop - paddleHeight);
            if (ballTop+paddleHeight > paddleTop && ballTop-ballWidth <= paddleTop){
                // console.log("here1"); 
                if(ballTop <= paddleTop + paddleHeight){ 
                    // console.log("ici");
                    return "bounce";
                }
            }
        }
        return "none";
    }
}
function checkReset(){
    var ball = document.querySelector(".ball");
    var temp = window.getComputedStyle(ball).left;
    var ballLeft = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(ball).top;
    var ballTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(ball).width;
    var ballWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".gameArea")).width;
    var gameWidth = Math.floor(Number(temp.slice(0, temp.length-2)));

    if (ballLeft>gameWidth-ballWidth*3){
        increasePoints("player 1");
        console.log("here 1");
        resetGame();
    }
    if(ballLeft<-ballWidth*3){
        increasePoints("player 2");
        console.log("here 2");
        resetGame();
    }
}
function moveBall(ballSpeed, ballDirection){
    // alert(ballSpeed + ballDirection);
    // alert(window.getComputedStyle(document.querySelector(".ball")).left);
    left = window.getComputedStyle(document.querySelector(".ball")).left;
    left = left.slice(0, left.length-2);
    // alert(left);
    left = Number(left);
    left = left+ballSpeed;
    // console.log(left);
    var top = window.getComputedStyle(document.querySelector(".ball")).top;
    top = top.slice(0, top.length-2);
    top = Number(top);
    top = top+ballDirection;
    document.querySelector(".ball").style.left = String(left) + "px";
    document.querySelector(".ball").style.top = String(top) + "px";
    // alert(window.getComputedStyle(document.querySelector(".ball")).left);
}// testingStuff();
function setTimer(startTime){
    c = document.querySelector(".timer");
    c.textContent = startTime;
    console.log(startTime);
}
function changeTime(decreaseRate){
    c = document.querySelector(".timer");
    c.textContent = Number(c.textContent)-decreaseRate;
}
function checkDone(){
    c = document.querySelector(".timer");
    console.log(c.textContent);
    if(c.textContent == "0"){
        alert("game has finished");}
}


function main(startTime){
    var startTime = 10000;
    var y = 120;
    setTimer(startTime*y);
    for(var i=0; i<startTime; i++){
        // let c = function(i){running(i)}
        setTimeout(running, i*1000/y);
    }
    let c = function(decreaseRate){return function(){changeTime(decreaseRate)};}
    console.log(c);
    let x = c(y);
    console.log(x);
        for (i=0; i<startTime; i++){
        
    setTimeout(x, i*1000/y);
    setTimeout(checkDone, i*1000/y)
    }
}
function running(){
    // // console.log(i);
    // changeTime(i);
    moveBall(window.ballSpeed, window.ballDirection);
    paddleSpeedChanger();
    movePaddles();
    if (checkPaddle("paddle1") == "bounce"){
        bouncePaddle(window.ballSpeed, window.ballDirection, window.p1Speed);
    }
    if (checkPaddle("paddle2") == "bounce"){
        bouncePaddle(window.ballSpeed, window.ballDirection, window.p2Speed);
    }
    bounceWall();
    paddleArea();
    checkReset();
    checkDone();
    // console.log(window.upHeld);
    // console.log(window.downHeld);
    // console.log(window.wHeld);
    // console.log(window.sHeld);
}
var ballSpeed = 3;
var ballDirection = 0;
var p1Speed = 0;
var p2Speed = 0;
var paddleStart = window.getComputedStyle(document.querySelector(".paddle")).top;
var ballStartTop = window.getComputedStyle(document.querySelector(".ball")).top;
var ballStartLeft = window.getComputedStyle(document.querySelector(".ball")).left;
var upHeld = false;
var downHeld = false;
var wHeld = false;
var sHeld = false;

document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name == "ArrowUp"){
        upHeld = true;
    }
    if (name == "ArrowDown"){
        downHeld = true;
    }
    if (name == "w" || name == "W"){
        wHeld = true;
    }
    if (name == "s" || name == "S"){
        sHeld = true;
    }
}
);
document.addEventListener("keyup", (event) => {
    var name = event.key;
    if (name == "ArrowUp"){
        upHeld = false;
    }
    if (name == "ArrowDown"){
        downHeld = false;
    }
    if (name == "w" || name == "W"){
        wHeld = false;
    }
    if (name == "s" || name == "S"){
        sHeld = false;
    }
});
intPaddles();
main(10000);