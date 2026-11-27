// 1. LOOP: List numbers from 1 to 10
let numberList = "";
for (let i = 1; i <= 10; i++) {
  numberList += i + " ";
}
console.log("Numbers:", numberList);

// 2. METHOD 1 (Math): Pick a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);

// 3. METHOD 2 (Date) + SWITCH: Show what day it is
let dayName;
switch (new Date().getDay()) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown Day";
}
console.log("Today is:", dayName);
