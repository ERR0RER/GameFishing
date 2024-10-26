var score = 0;
var maxScore = 10;
var level = 1;
const StartGame = document.getElementById('game-start');

StartGame.addEventListener('click', function(){
	
const hook = document.getElementById('cursor');
const start = document.getElementById('start');
const background = document.getElementById('background-before');
background.style.opacity = 0;
start.style.opacity = 0;
start.style.top =`${1000}px`;
hook.style.opacity = 1;




document.documentElement.style.cursor = 'none';
function createBubble() {
	const BUBBLE = document.createElement('div');
	BUBBLE.classList.add('bubble');

	const MainWindow = document.getElementById('lake');
	const containerWidth = MainWindow.offsetWidth;
	const containerHeight = MainWindow.offsetHeight;

	const randomX = Math.random() * (containerWidth - 50);
	const randomY = Math.random() * (containerHeight + 200);

	BUBBLE.style.left = `${randomX}px`;
	BUBBLE.style.top = `${randomY}px`;
	MainWindow.appendChild(BUBBLE);

	setTimeout(() => {
		BUBBLE.remove();
	}, 1000);


}



function spawnElements() {
	const numberOfElements = Math.floor(Math.random() * 3) + 1;
	for (let i = 0; i < numberOfElements; i++) {
		createBubble();
	}
}

setInterval(spawnElements,150);




document.addEventListener('mousemove', (event) =>{
	const x = event.clientX -20;
	const y = event.clientY - 20;

	hook.style.transform = `translate(${x}px, ${y}px)`;
})


function createFish() {
	const Fish = document.createElement('div');
	Fish.classList.add('fish');

	
	
	const MainWindow = document.getElementById('lake');
	const containerWidth = MainWindow.offsetWidth;
	const containerHeight = MainWindow.offsetHeight;

	const randomX = containerWidth - 50;
	const randomY = Math.random() * (containerHeight - 50);

	Fish.style.left = `${randomX}px`;
	Fish.style.top = `${randomY}px`;
	MainWindow.appendChild(Fish);

	

	Fish.addEventListener('mouseenter', function(){
		Fish.remove();
		score++;
		if(score == maxScore){
			score =0;
			maxScore +=10;
			level++;
		}
		console.log("Счет: " + score)
		const gameScore = document.getElementById('game-score');
	gameScore.innerHTML = score + "/" + maxScore;
	const gameLevel = document.getElementById('game-level');
	gameLevel.innerHTML = "Level " + level;
	})

	setTimeout(() => {
		Fish.remove();
	}, 2000); 

}

function spawnFish() {
	createFish();
}

setInterval(spawnFish, 1050);


})
