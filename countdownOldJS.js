const date = new Date();
const year = date.getFullYear();

const output = document.getElementById("output");
const btn = document.getElementById("btn");
const btnStop = document.getElementById("btnStop");
const input = document.getElementById("timeUser");

//Global variables
let repeat, time, hours, minutes, seconds, startingMinutes;


//Taking the input
input.addEventListener('change', function(){
	startingMinutes = Number(input.value);
	time = startingMinutes * 60;
	console.log(time)
});

function executeCountdown() {
	output.classList.add("timer");
	btn.classList.add("block")
	minutes = Math.floor(time / 60);
	seconds = time % 60;
	hours = Math.floor(time / 3600);
	console.log(time)
	
	//If there is hours in minutes
	if (startingMinutes > 60) {
		minutes = minutes % 60;
	}

	if (minutes < 10) { minutes = "0"+ minutes}
	if (seconds < 10) { seconds = "0"+ seconds}
	
	if (hours => 1) { output.textContent = hours + " : " + minutes + " : " + seconds}
	if (hours < 1) { output.textContent = minutes + " : " + seconds}
	time--;
}

function stopTimer() {
	clearInterval(repeat);
	output.classList.remove("error")
	output.classList.remove("timer");
	output.textContent = "Please type a number"
	btn.disabled = false;
	btn.textContent = "Start Again";
	btn.classList.remove("block")
}

function validatingInputs() {
	if (isNaN(time) || time < -1) {
		output.textContent = "Error! please type a number"
		output.classList.add("error")
		clearInterval(repeat)
		btn.textContent = "Try Again";
		btn.disabled = false;
	}
}

// Main function
function updating() {
	
	if (time === 0) {
		setTimeout( function() {stopTimer()}, 900)
	} 
	if (time => 0) {
		output.classList.remove("error")
		executeCountdown()
		btn.disabled = true;
		btn.textContent = "Wait until the end";
	}
	
	validatingInputs()
}

function callback() {
	repeat = setInterval( function() { updating() }, 1000); 
}

btn.addEventListener('click', callback);
btnStop.addEventListener('click', function() {
	time = 0;
})