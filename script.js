//№1
const myArray = ["yellow", 100, true, "toyota", { name: "Aidin", id: 883 }];
let [uuuu, san, , , user] = myArray;
console.log(uuuu);
console.log(san);
console.log(user);
console.clear();
//№2
const [first, second, third] = [10, 20, 30];
console.log(first);
console.clear();
//№3
const rect = { width: 400, height: 100 };
let { height, width } = rect;
console.log(height);
console.log(width);
console.clear();
//№4
const newObj = {
	name: "user",
	address: {
		town: "Bishkek",
		street: "Chuy",
	},
};

const {
	name: username,
	address: { town, street },
} = newObj;
console.log(street);
console.clear();
//№5
const myBtn = document.querySelector(".button");
function showConsole() {
	myBtn.innerHTML = "Loading...";
	setTimeout(function () {
		goBack();
	}, 3000);
}
showConsole();
function goBack() {
	myBtn.innerHTML = "Add";
}
//№6
const timer = document.querySelector("#timer");
let timerValue = 0;
let timerId = null;
function updateTimer() {
	timer.innerHTML = timerValue;
}
function startTimer() {
	if (timerId === null) {
		timerId = setInterval(() => {
			timerValue++;
			updateTimer();
		}, 1000);
	}
	console.log(timerId);
	setTimeout(() => {
		clearInterval(timerId);
		timerId = null;
		timerValue = 0;
		updateTimer();
	}, 10000);
}
function stopTimer() {
	clearInterval(timerId);
	timerId = null;
}
function resetTimer() {
	clearInterval(timerId);
	timerId = null;
	timerValue = 0;
	updateTimer();
}
