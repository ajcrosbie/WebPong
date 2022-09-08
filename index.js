// evaluates the boolean values for the held keys and sets paddle speed
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

// reads the css value, processes it to usable int, adds the "paddle speed", writes it back with units
function movePaddles(){
    var paddle = document.querySelector("#leftPaddle");
    var temp = window.getComputedStyle(paddle).top;
    var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2))); // this sort will be common because css needs units 
    paddleTop = paddleTop+window.p1Speed;                             //and for some reason accepts float pixels
    document.querySelector("#leftPaddle").style.top = paddleTop + "px";
    paddle = document.querySelector("#rightPaddle");
    var temp = window.getComputedStyle(paddle).top;
    var paddleTop = Math.floor(Number(temp.slice(0, temp.length-2)));
    paddleTop = paddleTop+window.p2Speed;
    document.querySelector("#rightPaddle").style.top = paddleTop + "px";
}

// stops the paddles leaving the Area resets them when they do
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

// if the ball is out of range it resets it and changes it's direction (direction being change in top)
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
    
    if (ballTop<(-paddleHeight+ballWidth)|| ballTop>(gameHeight-paddleHeight)){
		window.ballDirection = window.ballDirection *-1;}
}

// as it says on the tin
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
// sets paddles to ints for the sake of simplicity
function intPaddles(){
    var temp = window.getComputedStyle(document.querySelector("#rightPaddle")).width;
    var paddleWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    var temp = window.getComputedStyle(document.querySelector(".gameArea")).width;
    var gameWidth = Math.floor(Number(temp.slice(0, temp.length-2)));
    
    temp = gameWidth-paddleWidth*2.1; // temp here is just used to put the right paddle about the correct spot
    temp = Math.floor(temp);
    document.querySelector("#rightPaddle").style.left = temp + "px";

    temp = window.getComputedStyle(document.querySelector("#leftPaddle")).left;
    temp = Number(temp.slice(0, top.length-2));
    temp = Math.floor(temp);
    document.querySelector("#leftPaddle").style.left = temp + "px";
}
// as it says on the tin
function resetGame(){
    document.getElementById("leftPaddle").style.top = window.paddleStart;
    document.getElementById("rightPaddle").style.top = window.paddleStart;
    document.querySelector(".ball").style.left = window.ballStartLeft;
    document.querySelector(".ball").style.top = window.ballStartTop;
    window.ballDirection = 0;
}
// makes an audio object that plays the sound later
function playSound(audio){
	var audio = new Audio("Recording.m4a");
	return audio;
}
//  adds the paddles speed to the ball
function bouncePaddle(ballSpeed, ballDirection, paddleSpeed){
    ballSpeed = ballSpeed*-1;
    window.ballSpeed = ballSpeed;
    window.ballDirection = Math.floor(ballDirection+paddleSpeed*1.5);//1.5 can be changed for choice change if aproptiate queation is chosen
    window.audio.play();
}

function bounceTimeDecrease(){
	if (window.waitTime==0){return}
	window.waitTime = window.waitTime-1;
}

// checks if the paddles are hitting the ball
function checkPaddle(paddle){
	if (window.waitTime > 0){return "none"}
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

        if (ballLeft < paddleWidth*-1-7){ // looks a little strange but it works (mostly) because 
		//the ball's left is different to the paddles and the -7 is for the padding

            if (ballTop+paddleHeight >= paddleTop && ballTop-ballWidth <= paddleTop){ // again because of the ball not being
					window.waitTime = 100;		// with the paddles but this doesnt need slight adjustments due to padding
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

        if (ballLeft > paddleLeft-paddleWidth*2+5){// looks a little strange but it works (mostly) because 
		//the ball's left is different to the paddles and the +5 is for the padding

            if (ballTop+paddleHeight > paddleTop && ballTop-ballWidth <= paddleTop){
                if(ballTop <= paddleTop + paddleHeight){
					window.waitTime = 100;					
                    return "bounce";
                }
            }
        }
        return "none";
    }
}
// checks if the ball is out of bounds and on whose side
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

    if (ballLeft>gameWidth-ballWidth*3){// agian because of the uneven left values
        increasePoints("player 1");
        console.log("here 1");
        resetGame();
    }
    if(ballLeft<-ballWidth*3){// it's 3 ball widths in to start with
        increasePoints("player 2");
        console.log("here 2");
        resetGame();
    }
}
//  reads the css value, processes it to usable Number, adds the "ballSpeed" or "ballDirection", writes it back with units
function moveBall(ballSpeed, ballDirection){
    left = window.getComputedStyle(document.querySelector(".ball")).left;
    left = left.slice(0, left.length-2);
    left = Number(left);
    left = left+ballSpeed;
    var top = window.getComputedStyle(document.querySelector(".ball")).top;
    top = top.slice(0, top.length-2);
    top = Number(top);
    top = top+ballDirection;
    document.querySelector(".ball").style.left = String(left) + "px";
    document.querySelector(".ball").style.top = String(top) + "px";
}
// sets the timer to be requested time ine ms
function setTimer(startTime){
    c = document.querySelector(".timer");
    c.textContent = startTime;
	console.log(c.textContent);
    console.log(startTime);
}
// decreases the time by the specified amount and displays a rounded version while keeping the actual value
function changeTime(decreaseRate){
    c = document.querySelector(".timer");
	if (window.prevTime =="none"){window.prevTime = Number(c.textContent)}
	window.prevTime = window.prevTime-decreaseRate
    c.textContent = Math.floor(window.prevTime);
}
// gives the user the final winner and hides the timer
function checkDone(){
    c = document.querySelector(".timer");
    //console.log(c.textContent);
    if(Number(c.textContent) <= 0){
		c.style.visibility = "Hidden"; // do this as the timer could be a negative
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
		document.querySelector(".winner").style.visibility = "Hidden";
		c.style.visibility = "visible";
	}
}
// colects user variables and deals with them except time
function setup(){
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
			if(colour[i].value == "blue"){var p1C = "CornflowerBlue"} // maybe use the built in colour picker
			if(colour[i].value == "white"){var p1C = "white"}
		}
	}
	var colour = document.querySelectorAll(".p2Colour");
	for (var i=0;i<colour.length; i++){
		if(colour[i].checked){
			var p2C
			if(colour[i].value == "red"){p2C = "Crimson"}
			if(colour[i].value == "green"){p2C = "Chartreuse"}
			if(colour[i].value == "blue"){p2C = "CornflowerBlue"}
			if(colour[i].value == "white"){p2C = "white"}
		}
	}
	document.querySelector("#leftPaddle").style.backgroundColor = p1C;
	document.querySelector("#rightPaddle").style.backgroundColor = p2C;
	
	var num = document.querySelector(".time").value*1000;
	num = Number(num);
	num = Math.floor(num);
	main(num);
	
}
// resets the game when done
function fullReset(){
    window.ballSpeed = 3;
    window.ballDirection = 0;
    window.p1Speed = 0;
    window.p2Speed = 0;
	window.prevTime = "none"
    window.upHeld = false;
    window.downHeld = false;
    window.wHeld = false;
    window.sHeld = false;
    resetGame();
    document.querySelector(".leftScore").textContent = "0";
	document.querySelector(".rightScore").textContent = "0";
	
}
// creates the timeout functions needed to run because javascript doesn't just have a sleep function
function main(startTime){
	console.log(startTime);
    var y = 120;
	setTimer(startTime);
	let c = function(decreaseRate){return function(){changeTime(decreaseRate)};}
	let x = c(1000/y);// used higher order functions to pass the decrfease rate variable 
    for(var i=0; i<startTime/1000*y; i++){
        // let c = function(i){running(i)}
        setTimeout(running, i*1000/y);
		setTimeout(x, i*1000/y);
		setTimeout(checkDone, i*1000/y+20);// added a bit here to make sure it runs after the timer
    }

    //console.log(x);
}
// calls the nescecary functions in order not much more
function running(){
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
	bounceTimeDecrease();
    // console.log(window.upHeld);
    // console.log(window.downHeld);
    // console.log(window.wHeld);
    // console.log(window.sHeld);
}

// handles key presses
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
// handles key releases
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
// declares global variables here
ballSpeed = 3;
ballDirection = 0;
p1Speed = 0;
p2Speed = 0;
waitTime = 0;
paddleStart = window.getComputedStyle(document.querySelector(".paddle")).top;
ballStartTop = window.getComputedStyle(document.querySelector(".ball")).top;
ballStartLeft = window.getComputedStyle(document.querySelector(".ball")).left;
audio = playSound();
prevTime = "none";
upHeld = false;
downHeld = false;
wHeld = false;
sHeld = false;

// starts the code when submited
intPaddles();
document.querySelector(".form").addEventListener("submit", (e)=>{
    e.preventDefault();
	fullReset();
	setup();
})
