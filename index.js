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
    // console.log(temp)

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

function playSound(audio){
	var audio = new Audio("Recording.m4a");
	return audio;
}

function bouncePaddle(ballSpeed, ballDirection, paddleSpeed){
    ballSpeed = ballSpeed*-1;
    ballDirection = ballDirection+paddleSpeed;
    window.ballSpeed = ballSpeed;
    window.ballDirection = ballDirection+paddleSpeed;
    window.audio.play();
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
	console.log(c.textContent);
    console.log(startTime);
}

function changeTime(decreaseRate){
    c = document.querySelector(".timer");
    c.textContent = Number(c.textContent)-decreaseRate;
}

function checkDone(){
    c = document.querySelector(".timer");
    //console.log(c.textContent);
    if(Number(c.textContent) <= 0){
		c.style.visibility = "Hidden";
		document.querySelector(".winner").style.visibility = "visible";
		var p1Score = Number(document.querySelector(".leftScore").textContent);
		var p2Score = Number(document.querySelector(".rightScore").textContent);
		if (p1Score>p2Score){
			document.querySelector(".winner").textContent = document.querySelector(".p1Name").value + " wins by " + String(p1Score-p2Score);
		}
		if (p1Score<p2Score){
			document.querySelector(".winner").textContent = document.querySelector(".p2Name").value + " wins by" + String(p2Score-p1Score);
		}
		if(p1Score == p2Score){
			document.querySelector(".winner").textContent = "you draw";
		}
	}else{
		c.style.visibility = "visible";
		document.querySelector(".winner").style.visibility = "Hidden";
	}
	
}

function setup(){
	console.log("here");
	var name = document.querySelector(".p1Name").value;
	if (!(name=="")){
		document.querySelector(".leftText").textContent = name+" has scored";
	}
	var name = document.querySelector(".p2Name").value;
	if (!(name=="")){
		document.querySelector(".rightText").textContent = name+" has scored";
	}
	var colour = document.querySelectorAll(".p1Colour");
	for (var i=0;i<colour.length; i++){
		if(colour[i].checked){
			if(colour[i].value == "red"){var p1C = "Crimson"}
			if(colour[i].value == "green"){var p1C = "Chartreuse"}
			if(colour[i].value == "blue"){var p1C = "CornflowerBlue"}
			if(colour[i].value == "white"){var p1C = "white"}
		}
	}
	var colour = document.querySelectorAll(".p2Colour");
	for (var i=0;i<colour.length; i++){
		if(colour[i].checked){
			if(colour[i].value == "red"){p2C = "Crimson"}
			if(colour[i].value == "green"){p2C = "Chartreuse"}
			if(colour[i].value == "blue"){p2C = "CornflowerBlue"}
			if(colour[i].value == "white"){var p1C = "white"}
		}
	}
	document.querySelector("#leftPaddle").style.backgroundColor = p1C;
	document.querySelector("#rightPaddle").style.backgroundColor = p2C;
	
	var num = document.querySelector(".time").value*1000;
	num = Number(num);
	num = Math.floor(num);
	main(num);
	
}
function fullReset(){
    window.ballSpeed = 3;
    window.ballDirection = 0;
    window.p1Speed = 0;
    window.p2Speed = 0;
	
    window.upHeld = false;
    window.downHeld = false;
    window.wHeld = false;
    window.sHeld = false;
    resetGame();
    document.querySelector(".leftScore").textContent = "0";
	document.querySelector(".rightScore").textContent = "0";
}
function main(startTime){

	console.log(startTime);
    var y = 120;
    setTimer(Math.floor(startTime+((Math.floor(startTime/(startTime/1000*y))-startTime/(startTime/1000*y))*startTime/1000*y)));
    for(var i=0; i<startTime/1000*y; i++){
        // let c = function(i){running(i)}
        setTimeout(running, i*(startTime/(y*startTime/1000)));
    }
    let c = function(decreaseRate){return function(){changeTime(decreaseRate)};}
    console.log((Math.floor(startTime/(startTime/1000*y))-startTime/(startTime/1000*y))*startTime/1000*y);
    let x = c(Math.floor(startTime/(startTime/1000*y)));
    //console.log(x);
    for (var i=0; i<(startTime/1000*y); i++){
		setTimeout(x, i*(startTime/(y*startTime/1000)));
		setTimeout(checkDone, i*(startTime/(y*startTime/1000)));
    }
}
function running(){
    // // console.log(i);
	console.log("here now");
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
ballSpeed = 3;
ballDirection = 0;
p1Speed = 0;
p2Speed = 0;
paddleStart = window.getComputedStyle(document.querySelector(".paddle")).top;
ballStartTop = window.getComputedStyle(document.querySelector(".ball")).top;
ballStartLeft = window.getComputedStyle(document.querySelector(".ball")).left;
audio = playSound();

upHeld = false;
downHeld = false;
wHeld = false;
sHeld = false;


intPaddles();
document.querySelector(".form").addEventListener("submit", (e)=>{
    e.preventDefault();
	fullReset();
	setup();
})